import type { NextPage } from "next"
import NextLink from "next/link"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  href: `/${string}`
  className?: string
  disableHover?: boolean
}

const Link: NextPage<Props> = ({ children, href, className, disableHover }) => (
  <div className={`mr-4 ${className}`}>
    <NextLink href={href}>
      <span
        className={`
          py-1
          px-2
          rounded-md
          text-sm
          text-white
          font-semibold
          uppercase
          cursor-pointer
          ${!disableHover && "hover:bg-primary-200"}
        `}
      >
        {children}
      </span>
    </NextLink>
  </div>
)

export default Link
