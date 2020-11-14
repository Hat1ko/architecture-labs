import { ICategory } from '../../../core/interfaces'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm/index'
import { Book } from '../../books/entities'
import { User } from '../../users/entities'

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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'creatorId' })
  creator: User

  @OneToMany(() => Book, book => book.category)
  books: Book[]
}
