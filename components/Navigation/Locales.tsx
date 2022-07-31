import { Fragment, useEffect } from 'react'

import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Popover, Transition } from '@headlessui/react'

const locales = ['en-US', 'pt-PT']

const Locales: NextPage = () => {
	const { pathname, locale } = useRouter()

	return (
		<Popover className='relative ml-5'>
			{({ close }) => (
				<>
					<Popover.Button className='flex items-center'>
						<span className='sr-only'>Open locales menu</span>

						<Image src={`/flags/${locale}.png`} alt={locale} width={28} height={20} className='rounded-sm' />
					</Popover.Button>

					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-75'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'
					>
						<Popover.Panel
							className='
								origin-top-right
								absolute
								-left-[10px]
								flex
								flex-col
								overflow-hidden
								mt-2
								pt-2
								w-12
								rounded-md
								shadow-lg
								bg-white
								dark:bg-black
							'
						>
							{locales.map(item => (
								<Link key={item} href={pathname} locale={item}>
									<button className='mb-1' onClick={() => close()}>
										<Image
											src={`/flags/${item}.png`}
											alt={item}
											width={28}
											height={20}
											className='rounded-sm cursor-pointer'
										/>
									</button>
								</Link>
							))}
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	)
}

export default Locales
