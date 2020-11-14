import { IUserRole } from './user-role.interface'
import { IStorage } from '../../storages/entities'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  isActive: boolean
  roleId: string

  role?: IUserRole
  storage?: IStorage
}
