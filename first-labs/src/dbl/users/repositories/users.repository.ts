import { ExtendedRepository } from '../../extended.repository'
import { User } from '../entities'
import { IUsersRepository } from '../../../core/interfaces'
import { EntityRepository } from 'typeorm/index'

@EntityRepository(User)
export class UsersRepository extends ExtendedRepository<User> implements IUsersRepository {}
