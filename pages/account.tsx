import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'

import Container from 'components/Container'

const Account: NextPage = () => {
	const { data: session } = useSession()

	return (
		<Container seo={`rtg - ${session?.user?.name}`} protect>
			Account
		</Container>
	)
}

export default Account
