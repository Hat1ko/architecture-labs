import {IUser, IUserRole} from '../../../core/interfaces'
import {Column, PrimaryGeneratedColumn} from "typeorm/index";

export class UserRole implements IUserRole {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  key: string

  @Column()
  name: string

  // TODO: insert relations and entity types
  user?: IUser
}
