import { PassportModule } from '@nestjs/passport'
import { CustomDynamicModule, CustomModule } from '../../shared/helpers/customModule'
import jwtModuleProvider from '../../shared/jwt/jwt-module.provider'
import { AuthController } from './controllers'
import { AuthServiceProvider, } from './providers'
import { JwtStrategy, LocalStrategy } from './strategies'
import { UsersModule } from '../users'
import { forwardRef } from '@nestjs/common'

@CustomModule({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    jwtModuleProvider,
  ],
  controllers: [AuthController],
  public: [
    AuthServiceProvider,
    JwtStrategy,
  ],
  private: [
    // JwtServiceProvider,
    LocalStrategy,
  ],
})
export class AuthModule extends CustomDynamicModule {}
