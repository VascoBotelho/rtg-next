import type { NextPage } from "next"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import { motion, Variants } from "framer-motion"

import { paint } from "../core/paint"

import { Navigation } from "./Navigation"

const variants: Variants = {
  paint: ({ backgroundColor }) => ({ backgroundColor }),
  hidden: { opacity: 0 },
  visable: { opacity: 1 },
}

interface Props {
  children?: ReactNode
}

export const Layout: NextPage<Props> = ({ children }) => {
  const { pathname } = useRouter()
  const { theme } = useTheme()

  const path = paint.includes(pathname)
  const dark = theme === "dark"
  const painted = dark ? "#4752C4" : "#7289DA"
  const defaultPaint = dark ? "#4752C4" : "#FFF"

  return (
    <motion.div
      custom={{ backgroundColor: path ? painted : defaultPaint }}
      initial="paint"
      animate="paint"
      variants={variants}
      className="overflow-y-auto"
    >
      <Navigation />

      <motion.main
        initial="hidden"
        animate="visable"
        exit="hidden"
        variants={variants}
        transition={{ type: "tween" }}
        className="px-36 pt-48 min-h-screen overflow-auto"
      >
        {children}
      </motion.main>
    </motion.div>
  )
}
