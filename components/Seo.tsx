import type { NextPage } from 'next'
import Head from 'next/head'

interface Props {
	title: string
}

export const Seo: NextPage<Props> = ({ title }) => (
	<Head>
		<title>{title}</title>
		<meta
			name='description'
			content='A bot for communities or groups of friends that like to organize games to play and choose randomly the teams.'
		/>
		<meta name='theme-color' content='#7289DA' />
		<link rel='icon' href='/favicon.ico' />
	</Head>
)
