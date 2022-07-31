import { Toaster } from 'react-hot-toast'

import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import { AnimatePresence } from 'framer-motion'
import { RecoilRoot } from 'recoil'

import Layout from 'components/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
	return (
		<RecoilRoot>
			<ThemeProvider attribute='class'>
				<DefaultSeo
					title='Random Team Generator'
					description='A bot for communities or groups of friends that like to organize games to play and choose randomly the teams.'
					additionalMetaTags={[{ name: 'theme-color', content: '#7289DA' }]}
				/>

				<SessionProvider session={session}>
					<Toaster position='bottom-center' toastOptions={{ className: 'dark:bg-black dark:text-white' }} />

					<Layout>
						<AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
							<Component {...pageProps} key={router.asPath} />
						</AnimatePresence>
					</Layout>
				</SessionProvider>
			</ThemeProvider>
		</RecoilRoot>
	)
}

export default MyApp
