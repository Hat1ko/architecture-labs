import { IBook, ICategory, IUser } from '../../../core/interfaces'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index'

@Entity('category')
export class Category implements ICategory {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  creatorId: string

  // todo: insert relations + entity types
  creator: IUser
  books: IBook[]
}
