import { USER_ROLES_REPOSITORY } from '../../../core/providers/providers.const'
import { Connection } from 'typeorm/index'
import { UserRolesRepository } from '../repositories'

export const UserRolesRepositoryProvider = {
  provide: USER_ROLES_REPOSITORY,
  useFactory: (connection: Connection) => connection.getCustomRepository(UserRolesRepository),
  inject: [Connection],
}
