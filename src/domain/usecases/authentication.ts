/* eslint-disable @typescript-eslint/no-unused-vars */

import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  passsword: string
}

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}
