import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Github, Linkedin } from 'lucide-react'
import { ModeToggle } from './ui/toggle-mode'

import Link from 'next/link'
import { useState } from 'react'

type NavItem = {
  name: string
  href: string
  active: boolean
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about', active: true },
  { name: 'Experience', href: '#experience', active: false },
  { name: 'Skills', href: '#skills', active: false },
  { name: 'Projects', href: '#projects', active: false },
  { name: 'Contact', href: '#contact', active: false },
]

export default function Nav() {
  const [listNavItem, setListNavItem] = useState(navItems)
  const getNavItemClasses = (isActive: boolean) => {
    return {
      linkClass: isActive ? 'active' : '',
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? 'active w-16 bg-foreground h-2'
          : 'group-hover:w-16 group-hover:bg-foreground group-hover:h-px'
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? 'text-foreground'
          : 'text-slate-500 group-hover:text-foreground'
      }`,
    }
  }
  

  const handleChangeItemActive = (href: string) => {
    const updatedNavItems = navItems.map((item) => {
      if (item.href === href) {
        return { ...item, active: true }
      } else {
        return { ...item, active: false }
      }
    })
    setListNavItem(updatedNavItems)
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-12 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 lg:pr-12 mt-6 lg:mt-0">
        <div className="w-full flex lg:items-center lg:justify-start">
          <Avatar className="w-24 lg:w-36 h-auto border-2 border-primary bg-secondary">
            <AvatarImage
              src="./nt.jpg"
              className="object-cover"
              alt="Nhat Tin"
            />
            <AvatarFallback className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-1 border-primary">
              NT
            </AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-[42px] font-bold lg:text-start">
          Hi, i&#39;m Nhat Tin 👋
        </h1>
        <h2 className="text-xl lg:text-start">Web developer</h2>
        <p className="text-lg lg:text-start text-muted-foreground">
          I develop impactful web solutions, focusing on creating intuitive,
          responsive, and user-friendly interfaces. With expertise in modern web
          technologies, I transform ideas into product using my experiences that
          engage users and increase user satisfaction.
        </p>
      </div>
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-4 uppercase text-xs font-medium">
          {listNavItem.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.active
            )
            return (
              <li
                key={item.name}
                onClick={() => handleChangeItemActive(item.href)}
                className="group"
              >
                <Link href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <Button variant="outline" size="icon">
          <a
            href="https://github.com/tinnhat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://www.linkedin.com/in/tin-nguyen-nhat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ModeToggle />
      </ul>
    </header>
  )
}
