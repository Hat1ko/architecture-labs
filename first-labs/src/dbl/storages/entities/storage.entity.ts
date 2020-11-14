import { IBook, IStorage, IUser } from '../../../core/interfaces'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index'

@Entity('storage')
export class Storage implements IStorage {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  userId: string

  //TODO: insert relations and entity types
  user?: IUser
  books?: IBook[]
}
