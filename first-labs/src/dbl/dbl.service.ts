import {Inject, Injectable} from '@nestjs/common'
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
} from '../core'

@Injectable()
export class DBLService {
  constructor(
    @Inject(BOOKS_REPOSITORY)
    public readonly booksRepository: IBooksRepository,
    @Inject(CATEGORIES_REPOSITORY)
    public readonly categoriesRepository: ICategoriesRepository,
    @Inject(STORAGES_REPOSITORY)
    public readonly storagesRepository: IStoragesRepository,
    @Inject(REFRESH_TOKENS_REPOSITORY)
    public readonly refreshTokensRepository: IRefreshTokensRepository,
    @Inject(USER_ROLES_REPOSITORY)
    public readonly userRolesRepository: IUserRolesRepository,
    @Inject(USER_REPOSITORY)
    public readonly usersRepository: IUsersRepository,
  ) {
  }
}
