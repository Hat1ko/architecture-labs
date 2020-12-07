import { User } from '../../../../dbl/user/entities'
import { EntityManager } from 'typeorm'
import { ICreateUser } from '../dtos'
import { IUser } from '../entities'
import { UserRoleDto } from '../../../../modules/users/dtos/res';

export interface IUsersService {
  getByIdWithRole(id: string): Promise<IUser>

  getAdmin(): Promise<User>

  getAdminId(): Promise<string>

  comparePass(password: string, hash: string): Promise<boolean>

  hashPassword(password: string): Promise<string>

  store(createUserDto: ICreateUser, isEmailConfirmed?: boolean, entityManager?: EntityManager): Promise<IUser>

  // storeWithEmailActivation(createUserDto: IUserCreate, entityManager: EntityManager): Promise<IUser>

  changePassword(where: any, newPassword: string)

  remove(userId: string): Promise<void>

  delete(userId: string)

  activate(userId: string)

  deactivate(userId: string)
}
