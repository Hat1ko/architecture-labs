import { IUser } from '../../users/entities'

export interface IStorage {
  id: string
  userId: string

  user: IUser
}
