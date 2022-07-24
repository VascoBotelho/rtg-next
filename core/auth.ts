import { Account, Profile, User } from "next-auth"

interface SignIn {
  user: User
  account: Account
  profile?: Profile | undefined
  isNewUser?: boolean | undefined
}

export const signIn = (message: SignIn) => {
  console.log(message)
}
