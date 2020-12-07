import { REFRESH_TOKENS_REPOSITORY } from '../../../core/providers/providers.const'
import { Connection } from 'typeorm/index'
import { RefreshTokensRepository } from '../repositories'

export const RefreshTokensRepositoryProvider = {
  provide: REFRESH_TOKENS_REPOSITORY,
  useFactory: (connection: Connection) => connection.getCustomRepository(RefreshTokensRepository),
  inject: [Connection],
}
