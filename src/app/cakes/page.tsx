import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

// Временные данные для демонстрации
const cakes = [
    {
        _id: '1',
        name: 'Classic Cheesecake',
        slug: { current: 'classic-cheesecake' },
        description: 'Creamy vanilla cheesecake with graham cracker crust. Perfect balance of sweet and tangy flavors.',
        price: 45,
        image: '/images/1440_px_cheesecake.png',
        category: 'cheesecake',
        weight: 1.2,
        servings: 8
    },
    {
        _id: '2',
        name: 'Custom Wedding Cake',
        slug: { current: 'custom-wedding-cake' },
        description: 'Personalized multi-tier cake for your special day. Choose your own design and flavors.',
        price: 120,
        image: '/images/wrapper.png',
        category: 'wedding',
        weight: 3.5,
        servings: 50
    },
    {
        _id: '3',
        name: 'Madeleine Cookies',
        slug: { current: 'madeleine-cookies' },
        description: 'Traditional French shell-shaped sponge cakes with a delicate lemon flavor.',
        price: 25,
        image: '/images/1440_px_madlen.png',
        category: 'madeleine',
        weight: 0.5,
        servings: 12
    },
    {
        _id: '4',
        name: 'Chocolate Birthday Cake',
        slug: { current: 'chocolate-birthday-cake' },
        description: 'Rich chocolate sponge with chocolate ganache and fresh berries.',
        price: 65,
        image: '/images/1440_px_cheesecake.png',
        category: 'birthday',
        weight: 2.0,
        servings: 12
    },
    {
        _id: '5',
        name: 'Raspberry Cheesecake',
        slug: { current: 'raspberry-cheesecake' },
        description: 'Creamy cheesecake topped with fresh raspberry compote and white chocolate.',
        price: 50,
        image: '/images/wrapper.png',
        category: 'cheesecake',
        weight: 1.3,
        servings: 8
    },
    {
        _id: '6',
        name: 'Custom Birthday Cake',
        slug: { current: 'custom-birthday-cake' },
        description: 'Personalized birthday cake with your choice of flavors and decorations.',
        price: 75,
        image: '/images/1440_px_madlen.png',
        category: 'custom',
        weight: 2.5,
        servings: 16
    },
]

const categories = [
    { value: 'all', label: 'All Cakes' },
    { value: 'cheesecake', label: 'Cheesecakes' },
    { value: 'wedding', label: 'Wedding Cakes' },
    { value: 'birthday', label: 'Birthday Cakes' },
    { value: 'custom', label: 'Custom Cakes' },
    { value: 'madeleine', label: 'Madeleines' },
]

export default function CakesPage() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
            {/* Hero Section */}
                  <section 
        className="responsive-padding-y"
        style={{ 
          background: 'linear-gradient(135deg, var(--bg) 0%, var(--purple) 100%)'
        }}
      >
        <div className="mx-auto text-center responsive-padding-x">
                    <h1
                        className="text-4xl md:text-6xl mb-6"
                        style={{
                            fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                            color: 'var(--black)'
                        }}
                    >
                        Our <span style={{ color: 'var(--purple)' }}>Cakes</span>
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray)' }}>
                        Each cake is handcrafted with love using only the finest natural ingredients.
                        From classic cheesecakes to custom wedding cakes, we create sweet memories for every occasion.
                    </p>
                </div>
            </section>

            {/* Categories Filter */}
                  <section className="responsive-padding-y-small border-b" style={{ backgroundColor: 'var(--white)' }}>
        <div className="mx-auto responsive-padding-x">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category.value}
                                variant={category.value === 'all' ? 'default' : 'outline'}
                                className="rounded-full"
                            >
                                {category.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cakes Grid */}
                  <section className="responsive-padding-y">
        <div className="mx-auto responsive-padding-x">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cakes.map((cake) => (
                            <Card key={cake._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-64">
                                    <Image
                                        src={cake.image}
                                        alt={cake.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge style={{ backgroundColor: 'var(--purple)' }}>
                                            {cake.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{cake.name}</CardTitle>
                                    <CardDescription style={{ color: 'var(--gray)' }}>
                                        {cake.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm" style={{ color: 'var(--gray)' }}>
                                            <span>Weight: {cake.weight}kg</span>
                                            <span>Serves: {cake.servings}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold" style={{ color: 'var(--purple)' }}>
                                                ${cake.price}
                                            </span>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={`/cakes/${cake.slug.current}`}>
                                                        View Details
                                                    </Link>
                                                </Button>
                                                <Button size="sm">
                                                    Order Now
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
                  <section className="responsive-padding-y" style={{ backgroundColor: '#1c1c1c' }}>
        <div className="mx-auto text-center responsive-padding-x">
                    <h2
                        className="text-3xl md:text-4xl mb-6 text-white"
                        style={{ fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive' }}
                    >
                        Don&apos;t See What You&apos;re Looking For?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        We specialize in custom cakes for any occasion. Let us create something unique just for you.
                    </p>
                    <Button size="lg">
                        Request Custom Cake
                    </Button>
                </div>
            </section>
        </div>
    )
} 