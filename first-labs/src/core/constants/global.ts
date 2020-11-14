import { badRequestException } from './exceptions'
// import { InactiveUserGuard } from '../guards/inactive-users.guard'

export const globalExceptions = [badRequestException]

export const globalAccessGuards = [
  // InactiveUserGuard
]
