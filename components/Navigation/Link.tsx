import type { NextPage } from "next"
import { useRouter } from "next/router"
import NextLink from "next/link"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  href: `/${string}`
  className?: string
  disableHover?: boolean
}

const Link: NextPage<Props> = ({ children, href, className, disableHover }) => {
  const { pathname } = useRouter()

  return (
    <div className={`mr-4 ${className}`}>
      <NextLink href={href}>
        <span
          className={`
          py-1
          px-2
          rounded-sm
          text-sm
          text-white
          font-semibold
          uppercase
          cursor-pointer
          ${
            !disableHover &&
            pathname === href &&
            "bg-primary-200 dark:bg-discord-50"
          }
          ${!disableHover && "hover:bg-primary-200 dark:hover:bg-discord-50"}
        `}
        >
          {children}
        </span>
      </NextLink>
    </div>
  )
}

export default Link
