import { ResetPasswordCodeReqDto } from './reset-password-code-req.dto'

import { ApiProperty } from '@nestjs/swagger'

import { IsNotEmpty } from 'class-validator'

export class ResetPasswordReqDto extends ResetPasswordCodeReqDto {
  @ApiProperty()
  @IsNotEmpty()
  password: string
}
