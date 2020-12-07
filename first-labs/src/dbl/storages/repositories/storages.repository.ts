import { ExtendedRepository } from '../../extended.repository'
import { Storage } from '../entities'
import { IStoragesRepository } from '../../../core/interfaces'
import { EntityRepository } from 'typeorm/index'

@EntityRepository(Storage)
export class StoragesRepository
  extends ExtendedRepository<Storage>
  implements IStoragesRepository {}
