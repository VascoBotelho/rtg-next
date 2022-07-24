import type { NextPage } from "next"
import NextLink from "next/link"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  href: `/${string}`
  disableHover?: boolean
}

const Link: NextPage<Props> = ({ children, href, disableHover }) => (
  <div className="mr-4">
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
          ${!disableHover && "hover:bg-primary-200"}
        `}
      >
        {children}
      </span>
    </NextLink>
  </div>
)

export default Link
