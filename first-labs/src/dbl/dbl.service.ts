import { Inject, Injectable } from '@nestjs/common'
import {
  IBooksRepository,
  ICategoriesRepository,
  IRefreshTokensRepository,
  IStoragesRepository,
  IUserRolesRepository,
  IUsersRepository,
} from '../core/interfaces'
import {
  BOOKS_REPOSITORY,
  CATEGORIES_REPOSITORY,
  REFRESH_TOKENS_REPOSITORY,
  STORAGES_REPOSITORY,
  USER_REPOSITORY,
  USER_ROLES_REPOSITORY,
} from '../core/providers/providers.const'

@Injectable()
export class DBLService {
  constructor(
    @Inject(BOOKS_REPOSITORY)
    private readonly booksRepository: IBooksRepository,
    @Inject(CATEGORIES_REPOSITORY)
    private readonly categoriesRepository: ICategoriesRepository,
    @Inject(STORAGES_REPOSITORY)
    private readonly storagesRepository: IStoragesRepository,
    @Inject(REFRESH_TOKENS_REPOSITORY)
    private readonly refreshTokensRepository: IRefreshTokensRepository,
    @Inject(USER_ROLES_REPOSITORY)
    private readonly userRolesRepository: IUserRolesRepository,
    @Inject(USER_REPOSITORY)
    private readonly usersRepository: IUsersRepository,
  ) {}
}
