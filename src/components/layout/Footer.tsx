import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

const navigation = {
    main: [
        { name: 'Catalog', href: '/cakes' },
        { name: 'Fillings', href: '/fillings' },
        { name: 'Delivery & Payment', href: '/delivery-payment' },
        { name: 'About Me', href: '/about' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookies Policy', href: '/cookies' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: Facebook,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: Instagram,
        },
        {
            name: 'Telegram',
            href: '#',
            icon: MessageCircle,
        },
    ],
}

const features = [
    {
        icon: '/images/Footer/car.svg',
        title: 'Address delivery within Sydney'
    },
    {
        icon: '/images/Footer/cake.svg',
        title: 'Unique cake decoration'
    },
    {
        icon: '/images/Footer/leaf.svg',
        title: 'Only natural ingredients'
    },
]

export default function Footer() {
    return (
        <footer>
            {/* Top Section - Features */}
            <section style={{ background: 'var(--purple)', height: '116px' }}>
                <div className="mx-auto h-full flex items-center justify-center responsive-padding-x">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-row items-center gap-[16px]">
                                <div className="mb-3">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={68}
                                        height={68}
                                        className="w-17 h-17"
                                    />
                                </div>
                                <h3 className="text-white font-medium text-sm">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Section - Main Footer */}
            <section style={{ background: '#1c1c1c' }} className="text-white relative overflow-hidden">
                <div className="mx-auto py-12 relative z-10 responsive-padding-x">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Company info */}
                        <div className="space-y-4">
                            <div>
                                <Image
                                    src="/Logo_V3.png"
                                    alt="La Crème Patisserie"
                                    width={150}
                                    height={60}
                                    className="h-auto w-auto max-h-12 brightness-0 invert"
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-300">
                                    <span className="font-medium">+38(067)1444 44 44</span>
                                </p>
                                <p className="text-sm text-gray-300">
                                    post@gmail.com
                                </p>
                            </div>

                            {/* Social links */}
                            <div className="flex space-x-4 pt-2">
                                {navigation.social.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <ul className="space-y-2">
                                        {navigation.main.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm text-gray-300 hover:text-white transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <ul className="space-y-2">
                                        {navigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm text-gray-300 hover:text-white transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-gray-700">
                        <p className="text-xs text-gray-400 text-center">
                            © 2025 La Crème Patisserie. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Tower Image - Positioned to the right */}
                <div className="absolute bottom-0 right-0 opacity-30">
                    <Image
                        src="/images/Footer/tover.png"
                        alt="Eiffel Tower"
                        width={200}
                        height={400}
                        className="h-auto w-auto max-h-96"
                    />
                </div>
            </section>
        </footer>
    )
} 