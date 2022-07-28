import { Container } from '../../components'

import type { NextPage } from 'next'
import Link from 'next/link'

const Privacy: NextPage = () => {
	return (
		<Container footer>
			<h1>Privacy Policy</h1>

			<h6>Please read these privacy policies carefully before using Our Service.</h6>

			<p>
				At Random Team Generator, accessible from <Link href='/'>randomteamgenerator.xyz</Link>, one of our main
				priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is
				collected and recorded by Random Team Generator and how we use it.
			</p>

			<h5>Consent</h5>

			<p>By using our website or bot, you hereby consent to our Privacy Policy and agree to its terms.</p>

			<h5>How we use your information</h5>

			<p>We use the information we collect in various ways, including to:</p>

			<ul>
				<li>Provide, operate, and maintain our service</li>
				<li>Improve, personalize, and expand our service</li>
				<li>Understand and analyze how you use our service</li>
				<li>Develop new products, services, features, and functionality</li>
			</ul>

			<h5>Data Storage</h5>

			<p>
				Random Team Generator runs on a single-board computer (SBC) located inside Portugal, copies of this data might
				be made for backup purposes or to test and prepare bot updates. This copies will only be kept for the minimum
				amount of time required for them to serve their purpose.
			</p>
		</Container>
	)
}

export default Privacy
