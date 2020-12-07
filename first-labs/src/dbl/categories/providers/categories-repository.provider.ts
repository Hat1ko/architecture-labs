import { CATEGORIES_REPOSITORY } from '../../../core/providers/providers.const'
import { Connection } from 'typeorm/index'
import { CategoriesRepository } from '../repositories'

export const CategoriesRepositoryProvider = {
  provide: CATEGORIES_REPOSITORY,
  useFactory: (connection: Connection) => connection.getCustomRepository(CategoriesRepository),
  inject: [Connection],
}
