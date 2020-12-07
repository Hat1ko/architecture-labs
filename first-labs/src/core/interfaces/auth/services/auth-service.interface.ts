import { ITokenResponse } from '../dtos'
import { IStartResetPassword } from '../dtos'
import { IResetPasswordCode } from '../dtos'
import { IResetPassword } from '../dtos'

export interface IAuthService {
  /**
   * Check if user creadentials is valid (for authorization)
   * @param email user email
   * @param pass user password
   */
  validateUser(email: string, pass: string): Promise<any>

  /**
   * Creates access tokens for user
   * @param user object with user id and email
   */
  login(user: any): Promise<ITokenResponse>

  /**
   * Generate new access token by activate user refresh token
   * @param token refresh token
   */
  createNewTokenByRefresh(token: string): Promise<ITokenResponse>

  /**
   * Sends email with recovering credentials to user
   * @param dto object with user email that will be uset to recover password
   */
  startResetPassword(dto: IStartResetPassword): Promise<void>

  /**
   * Check if a secretCode and email is valid
   * @param dto user email and secretCode from received email
   */
  checkResetPasswordCode(dto: IResetPasswordCode): Promise<string>

  /**
   * Updates user password
   * @param dto user email, secretCode from received email and new password
   */
  resetPassword(dto: IResetPassword): Promise<ITokenResponse>

  /**
   * Activate user by received activation code
   * @param activationCode received code for email activation
   * @param email
   */
  confirmEmail(activationCode: string, email: string): Promise<ITokenResponse>

  /**
   * Send new secret code to confirm email
   * @param email
   */
  resetActivationCode(email: string): Promise<string>
}
