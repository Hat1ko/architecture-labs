import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class ResetActivationCodeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string
}
