import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class FbLoginReqDto {
  @ApiProperty()
  @IsNotEmpty()
  accessToken: string
}
