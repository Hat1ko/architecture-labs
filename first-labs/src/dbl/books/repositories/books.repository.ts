import { ExtendedRepository } from '../../extended.repository'
import { Book } from '../entities'
import { IBooksRepository } from '../../../core/interfaces'
import { EntityRepository } from 'typeorm/index'

@EntityRepository(Book)
export class BooksRepository extends ExtendedRepository<Book> implements IBooksRepository {}
