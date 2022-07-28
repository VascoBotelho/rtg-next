import { ReactNode } from 'react'

import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'

import { Variants, motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'

import { topnavState } from 'atoms'

import { Footer } from './Footer'

const variants: Variants = {
	hidden: { opacity: 0 },
	visable: { opacity: 1 }
}

interface Props {
	children?: ReactNode
	seo?: string
	protect?: boolean
	footer?: boolean
}

const Container: NextPage<Props> = ({ children, seo, protect, footer }) => {
	const { status } = useSession()

	const top = useRecoilValue(topnavState)

	return (
		<>
			<main className={`mx-auto mb-auto w-full max-w-[96rem] ${footer ? 'min-h-[calc(100vh-283px)]' : 'min-h-screen'}`}>
				<motion.div initial='hidden' animate='visable' exit='hidden' variants={variants} transition={{ type: 'tween' }}>
					{protect && status === 'loading' ? (
						'Loading...'
					) : protect && status === 'unauthenticated' ? (
						'Access Denied'
					) : (
						<motion.div
							initial={{ paddingTop: top ? '12rem' : '5rem' }}
							animate={{ paddingTop: top ? '12rem' : '5rem' }}
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

export default Container
