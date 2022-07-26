import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useSession } from "next-auth/react"
import { ReactNode } from "react"
import { motion, Variants } from "framer-motion"

import { Footer } from "./Footer"

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visable: { opacity: 1, scale: 1 },
}

interface Props {
  children?: ReactNode
  seo?: string
  protect?: boolean
  footer?: boolean
}

export const Container: NextPage<Props> = ({
  children,
  seo,
  protect,
  footer,
}) => {
  const { status } = useSession()

  return (
    <div className="flex flex-col h-screen">
      <main className="mb-auto">
        <motion.div
          initial="hidden"
          animate="visable"
          exit="hidden"
          variants={variants}
          transition={{ type: "tween" }}
          className="px-36 pt-48 overflow-auto"
        >
          {protect && status === "loading" ? (
            "Loading..."
          ) : protect && status === "unauthenticated" ? (
            "Access Denied"
          ) : (
            <>
              <NextSeo title={seo} />
              {children}
            </>
          )}
        </motion.div>
      </main>

      {footer && <Footer />}
    </div>
  )
}
