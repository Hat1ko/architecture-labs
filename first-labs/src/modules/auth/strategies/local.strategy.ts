import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AUTH_SERVICE } from '../../../core'
import { IAuthService } from '../../../core/interfaces/auth'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AUTH_SERVICE) private readonly authService: IAuthService) {
    super({
      usernameField: 'email',
    })
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password)
    if (!user) throw new BadRequestException('Invalid credentials')
    return user
  }
}
