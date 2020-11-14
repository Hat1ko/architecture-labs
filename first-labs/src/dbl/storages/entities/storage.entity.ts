import { IStorage } from '../../../core/interfaces'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm/index'
import { User } from '../../users/entities'
import { Book } from '../../books/entities'

@Entity('storage')
export class Storage implements IStorage {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  userId: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Book, book => book.addedBy)
  books?: Book[]
}
