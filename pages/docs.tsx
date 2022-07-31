import type { NextPage } from 'next'

import Container from 'components/Container'

const Docs: NextPage = () => {
	return (
		<Container seo='Docs' footer>
			<h1>Overview</h1>

			<p>
				Random Team Generator is a{' '}
				<a href='https://discord.com' target='_blank' rel='noreferrer'>
					Discord
				</a>{' '}
				Bot made to facilitate team building, creating games, setting up voice channels for games and queueing up with
				friends.
			</p>

			<br />
			<br />

			<h5>Invite</h5>

			<p color='GrayText'>
				To invite this bot you need to go{' '}
				<a href={`config().bot.invite`} target='_blank' rel='noreferrer'>
					here
				</a>
				, <span>select the server</span> you want the bot in, click continue and <span>authorise</span> the bot into the
				server.
			</p>

			<br />

			<p>
				If you already have the bot in your server and can&apos;t use the new <b>Slash commands</b>, you need to{' '}
				<a href={`config().bot.invite`} target='_blank' rel='noreferrer'>
					re-invite
				</a>{' '}
				the bot to the server.
			</p>

			<br />
			<br />
			<br />

			<div>
				<div>
					<h5>Main functionality</h5>

					<br />

					<h5>game</h5>

					<br />

					<p color='GrayText'>The bot can fetch all members from a voice channel and create randomized teams.</p>

					<br />

					<p>
						By default the number of teams is <b>2</b>.
					</p>
				</div>

				<div>{/* <Image src='simple' alt='game example' width='100%' /> */}</div>
			</div>
		</Container>
	)
}

export default Docs
