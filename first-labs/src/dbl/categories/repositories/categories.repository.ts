import { ExtendedRepository } from '../../extended.repository'
import { Category } from '../entities'
import { ICategoriesRepository } from '../../../core/interfaces'
import {Injectable} from "@nestjs/common";

@Injectable()
export class CategoriesRepository
  extends ExtendedRepository<Category>
  implements ICategoriesRepository {}
