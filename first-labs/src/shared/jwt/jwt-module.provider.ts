import { JwtModule } from '@nestjs/jwt'
import { CONFIG_SERVICE } from '../../core/providers/providers.const'
import { IConfigService } from '../../core/interfaces/other'

export default JwtModule.registerAsync({
  inject: [CONFIG_SERVICE],
  useFactory: async (config: IConfigService) => ({
    secret: config.get('JWT_KEY'),
    signOptions: {},
  }),
})
