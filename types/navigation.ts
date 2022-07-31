import { Paths } from 'types'

import navigation from 'locales/en-US/navigation.json'

export interface Navigation {
	name: Paths<typeof navigation>
	href: string
}
