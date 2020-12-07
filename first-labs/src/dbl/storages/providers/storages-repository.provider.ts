import { STORAGES_REPOSITORY } from '../../../core/providers/providers.const'
import { Connection } from 'typeorm/index'
import { StoragesRepository } from '../repositories'

export const StoragesRepositoryProvider = {
  provide: STORAGES_REPOSITORY,
  useFactory: (connection: Connection) => connection.getCustomRepository(StoragesRepository),
  inject: [Connection],
}
