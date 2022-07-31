import type { NextPage } from 'next'

import { Disclosure } from '@headlessui/react'

import { Navigation } from 'types'

import Link from '../Link'

interface Props {
	navigation: Navigation[]
}

const MobilePanel: NextPage<Props> = ({ navigation }) => (
	<Disclosure.Panel className='sm:hidden bg-primary-100 dark:bg-black'>
		<div className='px-2 pt-2 pb-3 space-y-1'>
			{navigation.map(item => (
				<Link key={item.name} href={item.href}>
					{item.name}
				</Link>
			))}
		</div>
	</Disclosure.Panel>
)

export default MobilePanel
