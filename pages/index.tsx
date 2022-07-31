import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'

import { motion } from 'framer-motion'

import { useTranslation } from 'hooks'

import Container from 'components/Container'
import { Trans } from 'components/Trans'

const Home: NextPage = () => {
	const { data: session } = useSession()
	const { t } = useTranslation('home')

	return (
		<Container footer>
			<div className='pb-12'>
				<h3>
					{t('introduction.title')} {session?.user?.name}
				</h3>

				<p>
					<Trans i18nKey='home:introduction.description' components={{ b: <b /> }} />
				</p>
			</div>

			<div className='pb-12'>
				<h3>{t('arguments.title')}</h3>

				<p>{t('arguments.description')}</p>
			</div>

			<div className='pb-12'>
				<h1>{t('gamemodes.title')}</h1>

				<p>
					<Trans i18nKey='home:gamemodes.description' components={{ b: <b /> }} />
				</p>
			</div>
		</Container>
	)
}

export default Home
