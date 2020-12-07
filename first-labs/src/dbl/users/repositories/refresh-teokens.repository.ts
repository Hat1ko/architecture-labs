import { ExtendedRepository } from '../../extended.repository'
import { RefreshToken } from '../entities'
import { IRefreshTokensRepository } from '../../../core/interfaces'
import { EntityRepository } from 'typeorm/index'

@EntityRepository(RefreshToken)
export class RefreshTokensRepository
  extends ExtendedRepository<RefreshToken>
  implements IRefreshTokensRepository {}
