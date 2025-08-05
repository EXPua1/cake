'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
    { name: 'OUR CAKES', href: '/cakes' },
    { name: 'FILLINGS', href: '/fillings' },
    { name: 'DELIVERY & PAYMENT', href: '/delivery-payment' },
    { name: 'ABOUT ME', href: '/about' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header style={{ backgroundColor: 'var(--white)' }} className="shadow-sm">
            <nav
                className="mx-auto flex items-center justify-between py-6 responsive-padding-x"
                aria-label="Global"
            >
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image
                            src="/Logo_V3.png"
                            alt="La Crème Patisserie"
                            width={150}
                            height={60}
                            className="h-auto w-auto max-h-12"
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        style={{ color: 'var(--gray)' }}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium leading-6 transition-colors hover:opacity-80"
                            style={{ color: 'var(--black)' }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Contact info */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="tel:+380671444444"
                        className="flex items-center gap-2 text-sm font-medium leading-6 transition-colors hover:opacity-80"
                        style={{ color: 'var(--black)' }}
                    >
                        <Phone className="h-4 w-4" />
                        +38(067)1444 44 44
                    </a>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn(
                "lg:hidden",
                mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
            )}>
                <div
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                    style={{ backgroundColor: 'var(--white)' }}
                >
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image
                                src="/Logo_V3.png"
                                alt="La Crème Patisserie"
                                width={120}
                                height={48}
                                className="h-auto w-auto max-h-10"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5"
                            style={{ color: 'var(--gray)' }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                                        style={{ color: 'var(--black)' }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="tel:+380671444444"
                                    className="flex items-center gap-2 text-base font-semibold leading-7"
                                    style={{ color: 'var(--black)' }}
                                >
                                    <Phone className="h-5 w-5" />
                                    +38(067)1444 44 44
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 