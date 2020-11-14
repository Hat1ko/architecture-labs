import { IUser } from '../../users'
import { IBook } from '../../books'

export interface ICategory {
  id: string
  name: string
  description: string
  creatorId: string

  creator: IUser
  books: IBook[]
}
