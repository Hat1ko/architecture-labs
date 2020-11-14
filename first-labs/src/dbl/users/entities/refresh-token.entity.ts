import { IRefreshToken, IUser } from '../../../core/interfaces'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index'
import { User } from './user.entity'

@Entity()
export class RefreshTokenEntity implements IRefreshToken {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  token: string

  @Column()
  userId: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user?: User
}
