import type { NextPage } from 'next'
import Link from 'next/link'

import { Variants, motion } from 'framer-motion'

import Container from 'components/Container'

const variants: Variants = {
	visable: { opacity: 1, x: 0 },
	hidden: { opacity: 0 }
}

const Service: NextPage = () => {
	return (
		<Container footer>
			<motion.div
				initial={{ opacity: 0, x: -25 }}
				animate='visable'
				exit='hidden'
				variants={variants}
				transition={{ type: 'tween' }}
			>
				<h1>Terms of Service</h1>
			</motion.div>

			<motion.div initial='hidden' animate='visable' exit='hidden' variants={variants} transition={{ delay: 0.1 }}>
				<h3>Please read these terms and conditions carefully before using Our Service.</h3>
			</motion.div>

			<br />

			<motion.div initial='hidden' animate='visable' exit='hidden' variants={variants} transition={{ delay: 0.2 }}>
				<h5>Interpretation</h5>

				<p>
					The words of which the initial letter is capitalized have meanings defined under the following conditions. The
					following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
				</p>

				<br />

				<h5>Definitions</h5>

				<p>For the purposes of these Terms and Conditions:</p>

				<ul>
					<li>
						Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Random Team
						Generator.
					</li>

					<li>
						Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
					</li>

					<li>Service refers to the Website and Discord Bot.</li>

					<li>
						Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire
						agreement between You and Random Team Generator.
					</li>

					<li>
						Third-party Social Media Service means any services or content (including data, information, products or
						services) provided by a third-party that may be displayed, included or made available by the Service.
					</li>

					<li>
						Website refers to Random Team Generator, accessible from <Link href='/'>randomteamgenerator.xyz</Link>
					</li>

					<ul>
						You means the individual accessing or using the Service, or the company, or other legal entity on behalf of
						which such individual is accessing or using the Service, as applicable.
					</ul>
				</ul>

				<br />

				<h5>Acknowledgment</h5>

				<p>
					These are the Terms and Conditions governing the use of this Service and the agreement that operates between
					You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the
					use of the Service.
				</p>

				<p>
					Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and
					Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
				</p>

				<p>
					By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with
					any part of these Terms and Conditions then You may not access the Service. You represent that you are over
					the age of 13. The Company does not permit those under 13 to use the Service.
				</p>

				<p>
					Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the
					Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use
					and disclosure of Your personal information when You use the Application or the Website and tells You about
					Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our
					Service.
				</p>

				<br />

				<h5>Links to Other Websites</h5>

				<p>
					Our Service may contain links to third-party web sites or services that are not owned or controlled by the
					Company.
				</p>

				<p>
					The Company has no control over, and assumes no responsibility for, the content, privacy policies, or
					practices of any third party web sites or services. You further acknowledge and agree that the Company shall
					not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by
					or in connection with the use of or reliance on any such content, goods or services available on or through
					any such web sites or services.
				</p>

				<p>
					We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or
					services that You visit.
				</p>

				<br />

				<h5>Termination</h5>

				<p>
					We may terminate or suspend Your access immediately, without prior notice or liability, for any reason
					whatsoever, including without limitation if You breach these Terms and Conditions.
				</p>

				<p>Upon termination, Your right to use the Service will cease immediately.</p>

				<br />

				<h5>"AS IS" and "AS AVAILABLE" Disclaimer</h5>

				<p>
					The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of
					any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf
					of its Affiliates and its and their respective licensors and service providers, expressly disclaims all
					warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all
					implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and
					warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without
					limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of
					any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work
					with any other software, applications, systems or services, operate without interruption, meet any performance
					or reliability standards or be error free or that any errors or defects can or will be corrected.
				</p>

				<p>
					Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation
					or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the
					information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted
					or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided
					through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of
					the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful
					components.
				</p>

				<p>
					Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable
					statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You.
					But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest
					extent enforceable under applicable law.
				</p>

				<br />

				<h5>Governing Law</h5>

				<p>
					The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the
					Service. Your use of the Application may also be subject to other local, state, national, or international
					laws.
				</p>

				<br />

				<h5>Disputes Resolution</h5>

				<p>
					If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally
					by contacting the Company.
				</p>

				<br />

				<h5>For European Union (EU) Users</h5>

				<p>
					If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country
					in which you are resident in.
				</p>

				<br />

				<h5>United States Legal Compliance</h5>

				<p>
					You represent and warrant that (i) You are not located in a country that is subject to the United States
					government embargo, or that has been designated by the United States government as a "terrorist supporting"
					country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
				</p>

				<br />

				<h5>Severability</h5>

				<p>
					If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and
					interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable
					law and the remaining provisions will continue in full force and effect.
				</p>

				<br />

				<h5>Waiver</h5>

				<p>
					Except as provided herein, the failure to exercise a right or to require performance of an obligation under
					this Terms shall not effect a party's ability to exercise such right or require such performance at any time
					thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
				</p>

				<br />

				<h5>Translation Interpretation</h5>

				<p>
					These Terms and Conditions may have been translated if We have made them available to You on our Service. You
					agree that the original English text shall prevail in the case of a dispute.
				</p>

				<br />

				<h5>Changes to These Terms and Conditions</h5>

				<p>
					We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new
					Terms and Conditions on this page.
				</p>

				<p>
					By continuing to access or use Our Service after those revisions become effective, You agree to be bound by
					the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website
					and the Service.
				</p>

				<p>
					You are advised to review this Terms and Conditions periodically for any changes. Changes to this Terms and
					Conditions are effective when they are posted on this page.
				</p>
			</motion.div>
		</Container>
	)
}

export default Service
