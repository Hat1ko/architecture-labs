import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index'
import { IBook } from '../../../core/interfaces'
import { User } from '../../users/entities'
import { Category } from '../../categories/entities'
import { Storage } from '../../storages/entities'

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

  @Column({ nullable: true })
  description: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'addedById' })
  addedBy: User

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category: Category

  @ManyToOne(() => Storage)
  @JoinColumn({ name: 'storageId' })
  storage: Storage
}
