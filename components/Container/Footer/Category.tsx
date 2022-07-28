import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { paint } from 'core/paint'

interface LinkProps {
	label: string
	href: string
}

interface Props {
	title: string
	links: LinkProps[]
}

export const Category: NextPage<Props> = ({ title, links }) => {
	const { pathname } = useRouter()

	return (
		<div>
			<h2
				className={`
				mb-6
				text-sm
				font-bold
				uppercase
				${paint.includes(pathname) ? 'text-black' : 'text-white'}
				dark:text-white`}
			>
				{title}
			</h2>

			<ul className={`${paint.includes(pathname) ? 'text-black' : 'text-white'} dark:text-discord-50`}>
				{links.map(link => (
					<li key={link.label} className='mb-4'>
						<Link href={link.href} className='hover:underline'>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
