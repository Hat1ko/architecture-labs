import { Body, Controller, HttpCode, Inject, Post, Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger'
import {
  ResetActivationCodeDto,
  ResetPasswordCodeReqDto,
  ResetPasswordReqDto,
  ResetTokenDto,
  StartResetPasswordReqDto,
  TokenResponseDto,
} from '../dto'
import { ConfirmEmailCodeReqDto } from '../dto/req'
import { DocThrowsMany } from '../../../shared/decorators'
import {
  invalidActivationCodeException,
  userByEmailNotFoundedException,
} from '../../../core/constants'
import { IAuthService } from '../../../core/interfaces/auth'
import { DocAcceptsBody } from '../../../shared/decorators/accepts-body.decorator'
import { AUTH_SERVICE } from '../../../core'

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(@Inject(AUTH_SERVICE) private readonly authService: IAuthService) {}

  @ApiProperty({ name: 'email', type: String, required: true })
  @ApiProperty({ name: 'password', type: String, required: true })
  @ApiResponse({
    status: 201,
    description: 'The new access token has been successfully created.',
    type: TokenResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Email or password incorrect' })
  @UseGuards(AuthGuard('local'))
  @Post()
  login(@Request() req): Promise<TokenResponseDto> {
    return this.authService.login(req.user)
  }

  @ApiResponse({
    status: 201,
    description: 'The new access token has been successfully created.',
    type: TokenResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Refresh token is invalid' })
  @DocAcceptsBody(ResetTokenDto)
  @Post('/reset-token')
  createNewToken(@Body() resetTokenDto: ResetTokenDto): Promise<TokenResponseDto> {
    return this.authService.createNewTokenByRefresh(resetTokenDto.token)
  }

  @ApiResponse({ status: 200, description: 'Secret code has been sent to email' })
  @DocAcceptsBody(StartResetPasswordReqDto)
  @Post('/reset-password-start')
  resetPasswordStart(@Body() dto: StartResetPasswordReqDto, @Request() req): Promise<any> {
    return this.authService.startResetPassword(dto)
  }

  @ApiResponse({ status: 200, description: 'Secret code is true' })
  @ApiResponse({ status: 400, description: 'Secret code is invalid' })
  @DocAcceptsBody(ResetPasswordCodeReqDto)
  @Post('/reset-password-check')
  @HttpCode(200)
  resetPasswordCheckCode(@Body() dto: ResetPasswordCodeReqDto): Promise<string> {
    return this.authService.checkResetPasswordCode(dto)
  }

  @ApiResponse({
    status: 201,
    description: 'User password has been changed',
    type: TokenResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Secret code is invalid' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @DocAcceptsBody(ResetPasswordCodeReqDto)
  @Post('/reset-password')
  resetPassword(@Body() dto: ResetPasswordReqDto): Promise<TokenResponseDto> {
    return this.authService.resetPassword(dto)
  }

  @ApiResponse({
    status: 200,
    description: 'User email has been confirmed',
    type: TokenResponseDto,
  })
  @DocAcceptsBody(ConfirmEmailCodeReqDto)
  @DocThrowsMany([userByEmailNotFoundedException, invalidActivationCodeException])
  @Post('/confirm-email')
  confirmEmail(@Body() dto: ConfirmEmailCodeReqDto): Promise<TokenResponseDto> {
    return this.authService.confirmEmail(dto.secretCode, dto.email)
  }

  @ApiResponse({
    status: 200,
    description: 'New secret code has been sent successfully to email.',
    type: String,
  })
  @ApiResponse({ status: 404, description: 'User not found or has already activated' })
  @DocAcceptsBody(ResetActivationCodeDto)
  @Post('/reconfirm-email')
  resetActivationCode(@Body() dto: ResetActivationCodeDto): Promise<string> {
    return this.authService.resetActivationCode(dto.email)
  }
}
