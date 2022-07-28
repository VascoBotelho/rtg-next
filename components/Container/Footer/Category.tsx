import type { NextPage } from 'next'
import Link from 'next/link'

interface LinkProps {
	label: string
	href: string
}

interface Props {
	title: string
	links: LinkProps[]
}

export const Category: NextPage<Props> = ({ title, links }) => (
	<div>
		<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>{title}</h2>

		<ul className='text-black dark:text-discord-50'>
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
