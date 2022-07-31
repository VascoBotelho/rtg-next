import { Fragment } from 'react'

import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import { useTranslation } from 'hooks'

import { Menu, Transition } from '@headlessui/react'

import { Navigation } from 'types'

const navigation: Navigation[] = [
	{ name: 'account', href: '/account' },
	{ name: 'dashboard', href: '/dashboard' }
]

const MobilePanel: NextPage = () => {
	const { data: session } = useSession()
	const { t } = useTranslation('navigation')

	return (
		<Menu as='div' className='ml-5 relative'>
			<Menu.Button className='flex text-sm rounded-full'>
				<span className='sr-only'>Open profile menu</span>

				<Image src={session?.user?.image!} alt={session?.user?.name!} width={36} height={36} className='rounded-full' />
			</Menu.Button>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='origin-top-right absolute overflow-hidden right-0 mt-2 pt-1 w-48 rounded-md shadow-lg bg-white dark:bg-black'>
					{navigation.map(item => (
						<Menu.Item key={item.name}>
							<Link href={item.href}>
								<span className='block px-4 py-2 text-sm cursor-pointer text-black dark:text-white hover:bg-gray-100 hover:dark:bg-gray-800'>
									{t(item.name)}
								</span>
							</Link>
						</Menu.Item>
					))}

					<Menu.Item>
						<span
							className='block px-4 py-2 text-sm cursor-pointer text-black dark:text-white hover:bg-gray-100 hover:dark:bg-gray-800'
							onClick={() => signOut()}
						>
							{t('logout')}
						</span>
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default MobilePanel
