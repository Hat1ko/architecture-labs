import { Inject, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import * as aes256 from 'aes256'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '../../../shared/config'
import { CONFIG_SERVICE } from '../../../core'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(CONFIG_SERVICE) private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_KEY'),
    })
  }

  async validate(payload: any) {
    return {
      id: String(aes256.decrypt(this.config.get('AES256_KEY'), payload.sub)),
      email: payload.email,
    }
  }
}
