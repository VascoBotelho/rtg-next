import { Container } from '../components'

import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Account: NextPage = () => {
	const { data: session } = useSession()

	return (
		<Container seo={`rtg - ${session?.user?.name}`} protect>
			Account
		</Container>
	)
}

export default Account
