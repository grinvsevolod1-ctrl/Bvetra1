'use client';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import ContactIcon from './ContactIcon';
import MobileNav from './MobileNav';
export default function Navbar(){
  return (
    <header className="header py-4 border-b">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/01_logo.png" alt="logo" width={48} height={48} />
          <div className="text-xl font-bold">Bvetra</div>
        </Link>
        <motion.nav initial={{opacity:0, y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className="hidden md:flex gap-6 items-center">
          <Link href="/services">Услуги</Link>
          <Link href="/cars">Автопарк</Link>
          <Link href="/chat">Чат ИИ</Link>
          <ContactIcon />
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
        <div className="md:hidden"><MobileNav /></div>
      </div>
    </header>
  )
}
