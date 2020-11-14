import { ExtendedRepository } from '../../extended.repository'
import { Storage } from '../entities'
import { IStoragesRepository } from '../../../core/interfaces'
import { Injectable } from '@nestjs/common'

@Injectable()
export class StoragesRepository
  extends ExtendedRepository<Storage>
  implements IStoragesRepository {}
