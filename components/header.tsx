import * as React from 'react'
import { Logo } from '@/components/logo';
import {Chat} from "@/components/chat";
import { TailwindIndicator } from '@/components/tailwind-indicator'
import {nanoid} from "@/lib/utils";

export function Header() {
    const id = nanoid()

    return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-full px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
        <Logo classname="hidden md:flex" /> Header22
        <Chat id={id} />
        <TailwindIndicator />
    </header>
  )
}
