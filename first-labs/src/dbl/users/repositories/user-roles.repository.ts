import { ExtendedRepository } from '../../extended.repository'
import { UserRole } from '../entities'
import { IUserRolesRepository } from '../../../core/interfaces'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserRolesRepository
  extends ExtendedRepository<UserRole>
  implements IUserRolesRepository {}
