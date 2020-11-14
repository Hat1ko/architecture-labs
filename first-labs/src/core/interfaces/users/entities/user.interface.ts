import { IUserRole } from './user-role.interface'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  isActive: boolean
  roleId: string

  role: IUserRole
}
