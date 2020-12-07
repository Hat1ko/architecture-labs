import { IResetPasswordCode } from './reset-password-code.interface'

export interface IResetPassword extends IResetPasswordCode {
  password: string
}
