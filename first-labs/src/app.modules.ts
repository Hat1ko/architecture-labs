import { DBLModule, TypeOrmModuleProvider } from './dbl'
import { ConfigModule } from './shared/config'

export const ApplicationModules = [
  ConfigModule,
  DBLModule.imports([TypeOrmModuleProvider])
]
