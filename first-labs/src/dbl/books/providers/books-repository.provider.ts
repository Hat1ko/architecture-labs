import { BOOKS_REPOSITORY } from '../../../core/providers/providers.const'
import { Connection } from 'typeorm/index'
import { BooksRepository } from '../repositories'

export const BooksRepositoryProvider = {
  provide: BOOKS_REPOSITORY,
  useFactory: (connection: Connection) => connection.getCustomRepository(BooksRepository),
  inject: [Connection],
}
