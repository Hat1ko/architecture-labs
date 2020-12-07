import { DBLModule, TypeOrmModuleProvider } from './dbl'
import { ConfigModule } from './shared/config'
import { AuthModule } from './modules/auth'

export const ApplicationModules = [
  ConfigModule,
  DBLModule.imports([TypeOrmModuleProvider]),

  AuthModule,
]
