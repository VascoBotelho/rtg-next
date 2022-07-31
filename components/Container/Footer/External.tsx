import type { NextPage } from 'next'
import Image from 'next/image'

interface Props {
	href: string
	src: string
	alt: string
	sr: string
}

const External: NextPage<Props> = ({ href, src, alt, sr }) => (
	<a href={href} className='text-black hover:black dark:hover:text-white'>
		<Image src={src} alt={alt} width={32} height={32} />
		<span className='sr-only'>{sr}</span>
	</a>
)

export default External
