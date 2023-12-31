'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'

type CardLinkActionProps = {
  text: string
  href: string
} & ComponentProps<'link'>

const CardLinkAction = ({ text, href }: CardLinkActionProps) => {
  return (
    <Link
      className="select-none rounded-lg border-none bg-blue-700 px-4 py-2 text-base transition-all ease-in hover:bg-blue-800"
      href={href}
    >
      {text}
    </Link>
  )
}

export default CardLinkAction
