import { IUser, IUserRole } from '../../../core/interfaces'
import { Column, PrimaryGeneratedColumn } from 'typeorm/index'

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

  // TODO : insert relations and entity types
  role?: IUserRole
}
