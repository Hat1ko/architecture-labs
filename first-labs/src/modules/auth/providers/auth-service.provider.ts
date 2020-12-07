import { AuthService } from '../services'
import { AUTH_SERVICE } from '../../../core'

export const AuthServiceProvider = {
  provide: AUTH_SERVICE,
  useClass: AuthService,
}
