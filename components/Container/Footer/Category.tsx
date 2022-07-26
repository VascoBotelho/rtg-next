import type { NextPage } from "next"

interface LinkProps {
  label: string
  href: string
}

interface Props {
  title: string
  links: LinkProps[]
}

export const Category: NextPage<Props> = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
      {title}
    </h2>

    <ul className="text-black dark:text-discord-50">
      {links.map((link) => (
        <li className="mb-4">
          <a href={link.href} className="hover:underline">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
)
