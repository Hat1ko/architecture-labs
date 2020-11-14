import { ExtendedRepository } from '../../extended.repository'
import { User } from '../entities'
import { IUsersRepository } from '../../../core/interfaces'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersRepository extends ExtendedRepository<User> implements IUsersRepository {}
