import { Account, Profile, User } from "next-auth"
import { user } from "../prisma/user"
import { user_old } from "../prisma/users"

interface SignIn {
  user: User
  account: Account
  profile?: Profile | undefined
  isNewUser?: boolean | undefined
}

export const signIn = async (message: SignIn) => {
  const usr_old = await user_old(message.account.providerAccountId)
  console.log("🚀 ~ usr_old", usr_old)

  const usr = await user(message.user.id)
  console.log("🚀 ~ usr", usr)
}
