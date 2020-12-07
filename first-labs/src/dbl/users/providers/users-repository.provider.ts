import { USER_REPOSITORY } from '../../../core/providers/providers.const'
import { Connection } from 'typeorm/index'
import { UsersRepository } from '../repositories'

export const UsersRepositoryProvider = {
  provide: USER_REPOSITORY,
  useFactory: (connection: Connection) => connection.getCustomRepository(UsersRepository),
  inject: [Connection],
}
