import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index'
import { IBook, ICategory, IStorage, IUser } from '../../../core/interfaces'

@Entity('book')
export class Book implements IBook {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  categoryId: string

  @Column()
  storageId: string

  @Column()
  name: string

  @Column()
  author: string

  @Column()
  publishingYear: string

  @Column()
  addedById: string

  @Column()
  description: string

  // TODO: add relations
  addedBy: IUser // TODO: set User as entity
  category: ICategory // TODO: set Category as entity
  storage: IStorage
}
