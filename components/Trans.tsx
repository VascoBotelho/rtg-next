import { useMemo } from 'react'

import { TransProps } from 'next-translate'
import NextTrans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

export const Trans = (props: TransProps) => {
	const { lang } = useTranslation()
	return useMemo(() => <NextTrans {...props} />, [lang])
}
