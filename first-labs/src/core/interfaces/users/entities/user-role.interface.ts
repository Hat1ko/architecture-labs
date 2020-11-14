import { IUser } from './user.interface'

export interface IUserRole {
  id: string
  key: string
  name: string

  user?: IUser
}
