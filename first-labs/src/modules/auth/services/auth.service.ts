import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { encrypt } from 'aes256'
import { CONFIG_SERVICE, notImplementedException, USERS_SERVICE } from '../../../core'
import { DBLService } from '../../../dbl'
import { userByEmailNotFoundedException } from '../../../core/constants'
import * as randomstring from 'randomstring'
import {
  IAuthService,
  IResetPassword,
  IResetPasswordCode,
  IStartResetPassword,
  ITokenPayload,
  ITokenResponse,
} from '../../../core/interfaces/auth'
import { IUsersService } from '../../../core/interfaces/users'
import { IConfigService } from '../../../core/interfaces/other'

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly dbl: DBLService,
    private readonly jwtService: JwtService,
    @Inject(USERS_SERVICE) private readonly usersService: IUsersService,
    @Inject(CONFIG_SERVICE) private readonly configService: IConfigService,
  ) {}

  public async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.dbl.usersRepository.findOne(
      { email },
      { select: ['password', 'id', 'email', 'roleId'] },
    )
    if (!user || !(await this.usersService.comparePass(pass, user.password))) {
      return false
    }
    const { password, ...result } = user
    return result
  }

  public async login(user: {
    id: string
    email: string
    isActive?: boolean
  }): Promise<ITokenResponse> {
    const userEntity = await this.dbl.usersRepository.findOne({
      id: user.id,
      // isEmailConfirmed: true,
      isActive: true,
    })
    if (!userEntity) throw new ForbiddenException('User is not active or has been deleted')

    const accessToken = this.createToken(
      user.id,
      user.email,
      this.configService.get('JWT_ACCESS_TOKEN_TIME'),
    )
    const refreshToken = this.createToken(user.id, user.email)

    await this.dbl.refreshTokensRepository.save({
      token: refreshToken,
      userId: user.id,
    })

    return { accessToken, refreshToken } as ITokenResponse
  }

  public async createNewTokenByRefresh(token: string): Promise<ITokenResponse> {
    const refreshToken = await this.dbl.refreshTokensRepository.findOne({
      relations: ['user', 'user.agentInfo'],
      where: { token },
    })

    if (!refreshToken || !refreshToken.user) {
      throw new BadRequestException('Refresh token is invalid')
    }

    if (!refreshToken.user.isActive) {
      throw new BadRequestException(
        'User has not confirmed his account, was deleted or has been deactivated',
      )
    }

    const accessToken = this.createToken(
      refreshToken.user.id,
      refreshToken.user.email,
      this.configService.get('JWT_ACCESS_TOKEN_TIME'),
    )

    return { accessToken } as ITokenResponse
  }

  public async startResetPassword(dto: IStartResetPassword): Promise<void> {
    throw notImplementedException
  }

  public async checkResetPasswordCode(dto: IResetPasswordCode): Promise<string> {
    throw notImplementedException
  }

  public async resetPassword(dto: IResetPassword): Promise<ITokenResponse> {
    const email = await this.checkResetPasswordCode(dto)

    const user = await this.dbl.usersRepository.findOne(
      { email },
      { select: ['password', 'id', 'email', 'roleId', 'isActive'] },
    )

    if (!user) {
      throw userByEmailNotFoundedException
    }

    if (user.isActive === false) {
      throw new BadRequestException('User is inactive')
    }

    await this.usersService.changePassword(user.id, dto.password)

    return await this.login(user)
  }

  async confirmEmail(activationCode: string, email: string): Promise<ITokenResponse> {
    throw notImplementedException
  }

  public async resetActivationCode(email: string): Promise<string> {
    throw notImplementedException
  }

  private createToken(id: string, email: string, expiresIn?: string | number): string {
    const payload: ITokenPayload = {
      //TODO: set email instead of null
      email: null,
      sub: encrypt(this.configService.get('AES256_KEY'), id + ''),
    }
    return this.jwtService.sign(payload, { expiresIn: expiresIn || '360s' })
  }
}
