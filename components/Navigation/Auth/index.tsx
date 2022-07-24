import type { NextPage } from "next"
import { useSession, signIn } from "next-auth/react"
import SignIn from "./SignIn"

const Auth: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <SignIn />
      ) : (
        <button className="text-white" onClick={() => signIn("discord")}>
          Login
        </button>
      )}
    </div>
  )
}

export default Auth
