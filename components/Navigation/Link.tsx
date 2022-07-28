import { ReactNode } from 'react'

import type { NextPage } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { classNames } from '../../utils'

interface Props {
	children: ReactNode
	href: string
	external?: boolean
	className?: string
	disableHover?: boolean
}

const Link: NextPage<Props> = ({ children, href, className, disableHover }) => {
	const { pathname } = useRouter()

	return (
		<NextLink href={href}>
			<span
				className={classNames(
					`
          px-3 py-1.5
          rounded-md
          text-sm
          text-white
          font-medium
          cursor-pointer
          ${!disableHover && pathname === href && 'bg-primary-200 dark:bg-discord-50'}
          ${!disableHover && 'hover:bg-primary-200 dark:hover:bg-discord-50'}
        `,
					className!
				)}
			>
				{children}
			</span>
		</NextLink>
	)
}

export default Link
