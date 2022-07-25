import type { NextPage } from "next"
import { useSession } from "next-auth/react"

const Account: NextPage = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  return <div>Account</div>
}

export default Account
