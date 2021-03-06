import { Disclosure } from '@headlessui/react'
import MenuIcon from '@heroicons/react/solid/MenuIcon'
import XIcon from '@heroicons/react/solid/XIcon'

import type { NextPage } from 'next'

interface Props {
	open: boolean
}

const MobileButton: NextPage<Props> = ({ open }) => (
	<Disclosure.Button
		className='
				inline-flex
				items-center
				justify-center
				p-2
				rounded-md
				text-white
			'
	>
		<span className='sr-only'>Open main menu</span>
		{open ? (
			<XIcon className='block h-6 w-6' aria-hidden='true' />
		) : (
			<MenuIcon className='block h-6 w-6' aria-hidden='true' />
		)}
	</Disclosure.Button>
)

export default MobileButton
