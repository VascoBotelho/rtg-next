import type { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"

import { useRef } from "react"
import { Disclosure } from "@headlessui/react"
import { motion, useInView, Variants } from "framer-motion"

import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon"
import SunIcon from "@heroicons/react/solid/SunIcon"
import MoonIcon from "@heroicons/react/solid/MoonIcon"

// import {
//   MdOutlineLightMode,
//   MdOutlineDarkMode,
//   MdOpenInNew,
// } from "react-icons/md"

import { paint } from "../../core/paint"

import Link from "./Link"
import Auth from "./Auth"

const variants: Variants = {
  default: ({ dark }) => ({
    padding: "1rem 6rem",
    backgroundColor: dark ? "#000" : "#7289DA",
    boxShadow: "rgb(51 51 51) 0 -2px 10px 0",
  }),
  top: ({ dark }) => ({
    padding: "4rem 10rem",
    backgroundColor: dark ? "#4752C400" : "#7289DA00",
    boxShadow: "rgb(51 51 51 / 0%) 0 -2px 10px 0",
  }),
}

export const Navigation: NextPage = () => {
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()

  const ref = useRef(null)
  const isInView = useInView(ref)

  const dark = theme === "dark"

  return (
    <>
      <div ref={ref} className="top-0 left-0" />

      <motion.nav
        custom={{ dark }}
        initial={isInView && paint.includes(pathname) ? "top" : "default"}
        animate={isInView && paint.includes(pathname) ? "top" : "default"}
        transition={{ type: "tween" }}
        variants={variants}
        className="fixed flex justify-between items-center w-full"
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center" disableHover>
            <Image
              src="/logo.svg"
              alt="rtg logo"
              width={42}
              height={42}
              className="cursor-pointer"
            />
          </Link>

          <a
            href="https://discord.com/oauth2/authorize?client_id=693300079838101504&permissions=16862224&scope=bot%20applications.commands"
            target="_blank"
            rel="noreferrer"
            className="flex
              items-center
              py-1
              px-2
              text-sm
              text-white
              font-semibold
              uppercase
              hover:bg-primary-200
            "
          >
            <span className="mr-1">Invite</span>
            <ExternalLinkIcon className="h-5 w-5" />
          </a>

          <Link href="/premium">premium</Link>

          <Link href="/docs">docs</Link>
        </div>

        <div className="flex items-center">
          <button
            className="mr-6 p-1 rounded-md hover:bg-primary-200 hover:dark:bg-white hover:dark:text-black"
            onClick={() => setTheme(dark ? "light" : "dark")}
          >
            {dark ? (
              <SunIcon className="w-7 h-7" />
            ) : (
              <MoonIcon className="w-7 h-7 text-white" />
            )}
          </button>

          <Auth />
        </div>
      </motion.nav>
    </>
  )
}
