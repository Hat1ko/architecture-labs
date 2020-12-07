import { JwtService } from '@nestjs/jwt'
import { JWT_SERVICE } from '../../core/providers/providers.const'

export const JwtServiceProvider = {
  provide: JWT_SERVICE,
  useClass: JwtService,
}
