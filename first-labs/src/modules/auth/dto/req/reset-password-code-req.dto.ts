import { ApiProperty } from '@nestjs/swagger'

import { IsEmail, IsNotEmpty } from 'class-validator'

export class ResetPasswordCodeReqDto {
  @ApiProperty()
  @IsNotEmpty()
  secretCode: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string
}
