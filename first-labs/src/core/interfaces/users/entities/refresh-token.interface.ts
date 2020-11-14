import { IUser } from './user.interface'

export interface IRefreshToken {
  id: string
  token: string
  userId: string

  user?: IUser
}
