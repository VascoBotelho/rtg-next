import type { NextPage } from "next"
import Image from "next/image"
import { useTheme } from "next-themes"
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdOpenInNew,
} from "react-icons/md"

import Link from "./Link"
import Auth from "./Auth"

export const Navigation: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const toggle = theme === "dark"

  return (
    <nav className="fixed flex justify-between items-center pt-16 px-32 w-full">
      <div className="flex items-center">
        <Link href="/" disableHover>
          <Image
            src="/logo.svg"
            alt="rtg logo"
            width={42}
            height={42}
            className="cursor-pointer"
          />
        </Link>

        <div className="flex items-center pr-6 text-white">
          <a
            href="https://discord.com/oauth2/authorize?client_id=693300079838101504&permissions=16862224&scope=bot%20applications.commands"
            target="_blank"
            className="pr-2 text-sm font-semibold uppercase"
          >
            Invite
          </a>

          <MdOpenInNew />
        </div>

        <Link href="/premium">premium</Link>

        <Link href="/docs">docs</Link>
      </div>

      <div className="flex items-center">
        <button
          className="mr-4 p-1 rounded-md hover:bg-primary-200"
          onClick={() => setTheme(toggle ? "light" : "dark")}
        >
          {toggle ? (
            <MdOutlineLightMode className="w-7 h-7 text-white" />
          ) : (
            <MdOutlineDarkMode className="w-7 h-7 text-white" />
          )}
        </button>

        <Auth />
      </div>
    </nav>
  )
}
