import { IUser } from '../../../core/interfaces'
import { Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm/index'
import { UserRole } from './user-role.entity'
import { Storage } from '../../storages/entities'

export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  isActive: boolean

  @Column()
  roleId: string

  @ManyToOne(() => UserRole)
  @JoinColumn({ name: 'roleId' })
  role?: UserRole

  @OneToMany(() => Storage, storage => storage.user)
  storage: Storage
}
