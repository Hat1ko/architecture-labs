import { IUserRole } from '../../../core/interfaces'
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm/index'
import { User } from './user.entity'

@Entity('user-role')
export class UserRole implements IUserRole {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  key: string

  @Column()
  name: string

  @OneToMany(() => User, user => user.role)
  user?: User
}
