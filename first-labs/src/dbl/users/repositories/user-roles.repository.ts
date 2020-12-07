import { ExtendedRepository } from '../../extended.repository'
import { UserRole } from '../entities'
import { IUserRolesRepository } from '../../../core/interfaces'
import { EntityRepository } from 'typeorm/index'

@EntityRepository(UserRole)
export class UserRolesRepository
  extends ExtendedRepository<UserRole>
  implements IUserRolesRepository {}
