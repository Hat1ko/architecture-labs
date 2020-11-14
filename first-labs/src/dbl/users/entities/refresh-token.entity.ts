import {IRefreshToken, IUser} from '../../../core/interfaces'
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm/index";

@Entity()
export class RefreshTokenEntity implements IRefreshToken {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  token: string

  @Column()
  userId: string

  // TODO: add relations and entity types
  user?: IUser
}
