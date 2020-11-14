import { ExtendedRepository } from '../../extended.repository'
import { Book } from '../entities'
import { IBooksRepository } from '../../../core/interfaces'
import { Injectable } from '@nestjs/common'

@Injectable()
export class BooksRepository extends ExtendedRepository<Book> implements IBooksRepository {}
