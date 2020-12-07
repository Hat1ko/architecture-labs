import { Global } from '@nestjs/common'
import { CustomDynamicModule, CustomModule } from '../shared/helpers/customModule'
import {BooksRepositoryProvider} from "./books/providers";
import {CategoriesRepositoryProvider} from "./categories/providers";
import {StoragesRepositoryProvider} from "./storages/providers";
import {RefreshTokensRepositoryProvider, UserRolesRepositoryProvider, UsersRepositoryProvider} from "./users/providers";
import {DBLService} from "./dbl.service";

@Global()
@CustomModule({
  imports: [],
  public: [
    BooksRepositoryProvider,
    CategoriesRepositoryProvider,
    StoragesRepositoryProvider,
    RefreshTokensRepositoryProvider,
    UserRolesRepositoryProvider,
    UsersRepositoryProvider,

    DBLService,
  ],
})
export class DBLModule extends CustomDynamicModule {}
