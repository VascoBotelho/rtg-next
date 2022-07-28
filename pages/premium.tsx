import { Dialog } from '@headlessui/react'

import { useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Container from 'components/Container'

const Premium: NextPage = () => {
	return (
		<Container footer>
			<NextSeo title='Premium' />
		</Container>
	)
}

export default Premium
