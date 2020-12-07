import { UserRole } from '../../../../dbl/users/entities'
import { ExtendedRepository } from '../../../../dbl'

export interface IUsersRolesService extends ExtendedRepository<UserRole> {
  getByKey(key: string): UserRole

  getById(id: string): UserRole
}
