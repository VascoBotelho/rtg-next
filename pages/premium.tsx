import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { useTranslation } from 'hooks'

import Container from 'components/Container'

const Premium: NextPage = () => {
	const { t } = useTranslation('premium')

	return (
		<Container footer>
			<NextSeo title='Premium' />

			<h1 className='text-8xl'>{t('title')}</h1>
		</Container>
	)
}

export default Premium
