import { topnavState } from '../../atoms'
import { Variants, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'

import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'

import { Footer } from './Footer'

const variants: Variants = {
	hidden: { opacity: 0, scale: 0.98 },
	visable: { opacity: 1, scale: 1 }
}

interface Props {
	children?: ReactNode
	seo?: string
	protect?: boolean
	footer?: boolean
}

export const Container: NextPage<Props> = ({ children, seo, protect, footer }) => {
	const { status } = useSession()

	const topnav = useRecoilValue(topnavState)

	console.log(topnav)

	return (
		<>
			<main className={`mx-auto mb-auto w-full max-w-[96rem] ${footer ? 'min-h-[calc(100vh-297px)]' : 'min-h-screen'}`}>
				<motion.div
					initial='hidden'
					animate='visable'
					exit='hidden'
					variants={variants}
					transition={{ type: 'tween' }}
					// className='px-8 pt-48'
				>
					{protect && status === 'loading' ? (
						'Loading...'
					) : protect && status === 'unauthenticated' ? (
						'Access Denied'
					) : (
						<motion.div
							initial={{ paddingTop: topnav ? '12rem' : '3rem' }}
							animate={{ paddingTop: topnav ? '12rem' : '3rem' }}
							transition={{ type: 'tween' }}
						>
							<NextSeo title={seo} />
							{children}
						</motion.div>
					)}
				</motion.div>
			</main>

			{footer && <Footer />}
		</>
	)
}
