import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ResetTokenDto {
  @ApiProperty()
  @IsNotEmpty()
  token: string
}
