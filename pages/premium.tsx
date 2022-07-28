import { Container } from '../components'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Premium: NextPage = () => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<Container footer>
			<NextSeo title='Premium' />
			premium
			<button onClick={() => setIsOpen(!isOpen)}>modal</button>
			{/* <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog> */}
		</Container>
	)
}

export default Premium
