import { Container, Layout } from '../../components'

import type { NextPage } from 'next'
import Link from 'next/link'

const Policy: NextPage = () => {
	return (
		<Container>
			<section>
				<h2>terms of service</h2>

				<p>
					The following document outlines the terms of use of <b>Random Team Generator</b>. Before using any of
					services, you are required to read, understand, and agree to these terms.
				</p>
			</section>

			<section>
				<h2>privacy policy</h2>

				<p>
					This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
					information when You use the Service and tells You about Your privacy rights and how the law protects You. We
					use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
					and use of information in accordance with this Privacy Policy.
				</p>
			</section>

			<section>
				<h2>refund policy</h2>

				<p>
					The purchase of digital services are subject to the following terms and conditions. Consumers are advised to
					review carefully before making any purchase.
				</p>

				<br />

				<p>
					All transactions for purchase of our services are made through payment gateways such as{' '}
					<Link href='https://stripe.com' target='_blank'>
						Stripe
					</Link>{' '}
					that uses SSL encryption. These payment gateways are safe and secure for using all types of credit cards and
					debit cards in different countries and your details are not stored during this process.
				</p>

				<br />

				<p>
					Since your purchase is a digital service, it is deemed “used” after payment, and all purchases made on{' '}
					<Link href='/'>randomteamgenerator.xyz</Link> are <b>non-refundable</b> or <b>exchangeable</b>. Since the
					products made available here are intangible, there is a strict <b>no refund policy</b>.
				</p>
			</section>
		</Container>
	)
}

export default Policy
