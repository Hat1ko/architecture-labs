import { ICategory } from '../../categories/entities/category.interface'
import { IUser } from '../../users/entities'

export interface IBook {
  id: string
  categoryId: string
  storage: string
  name: string
  author: string
  publishingYear: string
  addedById: string
  description: string

  addedBy: IUser
  category: ICategory
}
