import { ApiProperty } from '@nestjs/swagger'

import { IsEmail, IsNotEmpty } from 'class-validator'

export class StartResetPasswordReqDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string
}
