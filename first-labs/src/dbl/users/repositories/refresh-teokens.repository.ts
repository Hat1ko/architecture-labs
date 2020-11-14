import { ExtendedRepository } from '../../extended.repository'
import { RefreshToken } from '../entities'
import { IRefreshTokensRepository } from '../../../core/interfaces'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RefreshTokensRepository
  extends ExtendedRepository<RefreshToken>
  implements IRefreshTokensRepository {}
