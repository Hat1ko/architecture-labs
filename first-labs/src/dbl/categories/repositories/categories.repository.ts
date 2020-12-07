import { ExtendedRepository } from '../../extended.repository'
import { Category } from '../entities'
import { ICategoriesRepository } from '../../../core/interfaces'
import { EntityRepository } from 'typeorm/index'

@EntityRepository(Category)
export class CategoriesRepository
  extends ExtendedRepository<Category>
  implements ICategoriesRepository {}
