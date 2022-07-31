import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

import { paint } from 'core/paint'

import { Category } from './Category'
import External from './External'

export const Footer: NextPage = () => {
	const { pathname } = useRouter()
	const { theme } = useTheme()

	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={`p-4 sm:p-6 px-auto w-full ${paint.includes(pathname) ? 'bg-white' : 'bg-primary-100'} dark:bg-black`}
		>
			<div className='md:flex md:justify-between md:items-start'>
				<div className='flex flex-col'>
					<Link href='/' className='flex items-center mb-6 md:mb-0'>
						<div>
							<Image
								src={theme === 'dark' || !paint.includes(pathname) ? '/full_logo.svg' : '/full_logo_dark.svg'}
								alt='logo'
								width={105}
								height={32}
								className='cursor-pointer'
							/>
						</div>
					</Link>

					<a
						href='https://discord.com/oauth2/authorize?client_id=693300079838101504&permissions=16862224&scope=bot%20applications.commands'
						target='_blank'
						rel='noreferrer'
					>
						Invite
					</a>
				</div>

				<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
					<Category
						title='Resources'
						links={[
							{ label: 'Flowbite', href: 'https://flowbite.com/' },
							{ label: 'Tailwind CSS', href: 'https://tailwindcss.com/' }
						]}
					/>

					<Category
						title='Follow us'
						links={[
							{ label: 'Github', href: '#' },
							{ label: 'Discord', href: '#' }
						]}
					/>

					<Category
						title='Legal'
						links={[
							{ label: 'Terms & Conditions', href: '/policy' },
							{ label: 'Privacy Policy', href: '/policy/privacy' },
							{ label: 'Terms & Services', href: '/policy/service' }
						]}
					/>
				</div>
			</div>

			<hr className='my-4 sm:mx-auto' />

			<div className='sm:flex sm:items-center sm:justify-between'>
				<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2022{' '}
					<a href='https://flowbite.com/' className='hover:underline'>
						Vaz™
					</a>
					. All Rights Reserved.
				</span>

				<div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
					<External href='/' src='/twitter.svg' alt='twitter' sr='Twitter page' />
					<External href='/' src='/github.svg' alt='github' sr='GitHub account' />
				</div>
			</div>
		</motion.footer>
	)
}
