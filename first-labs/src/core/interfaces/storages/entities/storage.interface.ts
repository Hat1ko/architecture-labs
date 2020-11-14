import { IUser } from '../../users/entities'
import {IBook} from "../../books/entities";

export interface IStorage {
  id: string
  userId: string

  user?: IUser
  books?: IBook[]
}
