import { ICategory } from '../../categories/entities/category.interface'
import { IUser } from '../../users/entities'
import {IStorage} from "../../storages/entities";

export interface IBook {
  id: string
  categoryId: string
  storageId: string
  name: string
  author: string
  publishingYear: string
  addedById: string
  description: string

  addedBy?: IUser
  category?: ICategory
  storage?: IStorage
}
