import { useMemo } from 'react'

import { TranslationQuery } from 'next-translate'
import useNextTranslation from 'next-translate/useTranslation'

import { Paths } from 'types'

import common from 'locales/en-US/common.json'
import footer from 'locales/en-US/footer.json'
import home from 'locales/en-US/home.json'
import navigation from 'locales/en-US/navigation.json'
import premium from 'locales/en-US/premium.json'

export type TranslationKeys = {
	common: Paths<typeof common>
	navigation: Paths<typeof navigation>
	footer: Paths<typeof footer>
	home: Paths<typeof home>
	premium: Paths<typeof premium>
}

export const useTranslation = <T extends keyof TranslationKeys>(ns: T) => {
	const { t, lang } = useNextTranslation(ns)
	const T = useMemo(() => t, [lang])

	return {
		t: (
			s: TranslationKeys[T],
			q?: TranslationQuery,
			o?: {
				returnObjects?: boolean
				fallback?: string | string[]
				default?: string
			}
		) => T(s, q, o),
		lang
	}
}
