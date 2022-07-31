import type { NextPage } from 'next'
import Link from 'next/link'

import { Variants, motion } from 'framer-motion'

import Container from 'components/Container'

const variants: Variants = {
	visable: { opacity: 1, x: 0 },
	hidden: { opacity: 0 }
}

const Privacy: NextPage = () => {
	return (
		<Container footer>
			<motion.div
				initial={{ opacity: 0, x: -25 }}
				animate='visable'
				exit='hidden'
				variants={variants}
				transition={{ type: 'tween' }}
			>
				<h1>Privacy Policy</h1>
			</motion.div>

			<motion.div initial='hidden' animate='visable' exit='hidden' variants={variants} transition={{ delay: 0.1 }}>
				<h6>Please read these privacy policies carefully before using Our Service.</h6>
			</motion.div>

			<br />

			<motion.div initial='hidden' animate='visable' exit='hidden' variants={variants} transition={{ delay: 0.2 }}>
				<p>
					At Random Team Generator, accessible from <Link href='/'>randomteamgenerator.xyz</Link>, one of our main
					priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is
					collected and recorded by Random Team Generator and how we use it.
				</p>

				<br />

				<h3>Consent</h3>

				<p>By using our website or bot, you hereby consent to our Privacy Policy and agree to its terms.</p>

				<br />

				<h3>How we use your information</h3>

				<p>We use the information we collect in various ways, including to:</p>

				<ul>
					<li>Provide, operate, and maintain our service</li>
					<li>Improve, personalize, and expand our service</li>
					<li>Understand and analyze how you use our service</li>
					<li>Develop new products, services, features, and functionality</li>
				</ul>

				<br />

				<h3>Data Storage</h3>

				<p>
					Random Team Generator runs on a single-board computer (SBC) located inside Portugal, copies of this data might
					be made for backup purposes or to test and prepare bot updates. This copies will only be kept for the minimum
					amount of time required for them to serve their purpose.
				</p>

				<h3>Statistics</h3>

				<p>
					Random Team Generator collects anonymous data like how many servers, members and channels are there. None of
					this data is linked to specific users or servers.
				</p>

				<br />

				<h3>Service Providers</h3>

				<p>
					We may employ third party companies and individuals to facilitate our Service (&quot;Service Providers&quot;),
					provide the Service on our behalf, perform Service-related services or assist us in analysing how our Service
					is used.
				</p>

				<p>
					These third parties have access to your Personal Data only to perform these tasks on our behalf and are
					obligated not to disclose or use it for any other purpose.
				</p>

				<h3>Analytics</h3>

				<p>We may use third-party Service Providers to monitor and analyse the use of our Service.</p>

				<br />

				<h3>Google Analytics</h3>

				<p>
					A web analytics service offered by Google that tracks and reports website traffic. Google uses the data
					collected to track and monitor the use of our Service. This data is shared with other Google services. Google
					may use the collected data to contextualise and personalise the ads of its own advertising network.
				</p>

				<p>
					You can opt-out of having made your activity on the Service available to Google Analytics by installing the
					Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
					analytics.js and dc.js) from sharing information with Google Analytics about visits activity.
				</p>

				<p>
					For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:{' '}
					<a href='https://policies.google.com/privacy?hl=en' target='_blank' rel='noreferrer'>
						policies.google.com/privacy
					</a>
				</p>

				<br />

				<h3>Payments</h3>

				<p>
					We may provide paid products and/or services within the Service. In that case, we use third-party services for
					payment processing (e.g. payment processors).
				</p>

				<p>
					We will not store or collect your payment card details. That information is provided directly to our
					third-party payment processors whose use of your personal information is governed by their Privacy Policy.
					These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards
					Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS
					requirements help ensure the secure handling of payment information.
				</p>

				<br />

				<h3>The payment processors we work with is:</h3>

				<br />

				<h3>Stripe</h3>

				<p>
					Their Privacy Policy can be viewed at{' '}
					<a href='https://stripe.com/en-gb-pt/privacy' target='_blank' rel='noreferrer'>
						stripe.com/privacy
					</a>
				</p>

				<br />

				<h3>Service Providers</h3>

				<p>
					Our Service may contain links to other sites that are not operated by us. If you click a third party link, you
					will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every
					site you visit.
				</p>

				<p>
					We have no control over and assume no responsibility for the content, privacy policies or practices of any
					third party sites or services.
				</p>

				<br />

				<h3>Changes to This Privacy Policy</h3>

				<p>
					We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
					Privacy Policy on this page.
				</p>

				<p>
					By continuing to access or use Our Service after those revisions become effective, You agree to be bound by
					the revised policies. If You do not agree to the new policies, in whole or in part, please stop using the
					website and the Service.
				</p>

				<p>
					You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
					effective when they are posted on this page.
				</p>
			</motion.div>
		</Container>
	)
}

export default Privacy
