import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

// Временные данные для демонстрации
const fillings = [
    {
        _id: '1',
        name: 'Raffaello',
        description: 'Coconut-almond sponge soaked in coconut syrup, layered with coconut ganache and topped with almond flakes.',
        price: 15,
        image: '/images/1440_px_Fillings.png',
        category: 'nuts'
    },
    {
        _id: '2',
        name: 'Snickers',
        description: 'Chocolate sponge soaked in milk syrup, layered with caramel, peanuts, and cream cheese frosting.',
        price: 18,
        image: '/images/1440_px_Fillings.png',
        category: 'chocolate'
    },
    {
        _id: '3',
        name: 'Tropical',
        description: 'Chocolate sponge cake soaked with milk, coconut ganache, and mango-passion fruit spheres.',
        price: 20,
        image: '/images/1440_px_Fillings.png',
        category: 'fruit'
    },
    {
        _id: '4',
        name: 'Spiced Cherry',
        description: 'Chocolate sponge soaked in milk syrup, cherry compote with cinnamon, and cream cheese frosting.',
        price: 17,
        image: '/images/1440_px_Fillings.png',
        category: 'fruit'
    },
    {
        _id: '5',
        name: 'Peach Ice Cream',
        description: 'Vanilla sponge cake with milk soak, peach compote, vanilla mousse, and cream cheese.',
        price: 16,
        image: '/images/1440_px_Fillings.png',
        category: 'fruit'
    },
    {
        _id: '6',
        name: 'Strawberry and Cream',
        description: 'Vanilla sponge cake with milk soak, airy strawberry mousse, cream frosting, and strawberry compote.',
        price: 19,
        image: '/images/1440_px_Fillings.png',
        category: 'fruit'
    },
    {
        _id: '7',
        name: 'Raspberry-Lime',
        description: 'Classic white sponge cake with lime zest, soaked with syrup, layered with raspberry coulis, and white chocolate ganache infused with lime juice.',
        price: 22,
        image: '/images/1440_px_Fillings.png',
        category: 'fruit'
    },
    {
        _id: '8',
        name: 'Nutty Carrot Bliss',
        description: 'Spiced sponge cake with walnuts and carrot, white chocolate ganache with orange zest, and cream cheese frosting.',
        price: 18,
        image: '/images/1440_px_Fillings.png',
        category: 'nuts'
    },
]

const categories = [
    { value: 'all', label: 'All Fillings' },
    { value: 'fruit', label: 'Fruit' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'nuts', label: 'Nuts' },
    { value: 'cream', label: 'Cream' },
    { value: 'special', label: 'Special' },
]

export default function FillingsPage() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
            {/* Hero Section */}
                  <section 
        className="responsive-padding-y"
        style={{ 
          background: 'linear-gradient(135deg, var(--purple) 0%, var(--dark-purple) 100%)'
        }}
      >
        <div className="mx-auto text-center responsive-padding-x">
                    <h1
                        className="text-4xl md:text-6xl mb-6 text-white"
                        style={{ fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive' }}
                    >
                        Fillings
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Choose from our exquisite selection of premium fillings to create your perfect cake.
                        Each filling is crafted with natural ingredients and can be customized to your taste.
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

            {/* Fillings Grid */}
                  <section className="responsive-padding-y">
        <div className="mx-auto responsive-padding-x">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fillings.map((filling) => (
                            <Card key={filling._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-48">
                                    <Image
                                        src={filling.image}
                                        alt={filling.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge style={{ backgroundColor: 'var(--purple2)' }}>
                                            {filling.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">{filling.name}</CardTitle>
                                    <CardDescription className="text-sm line-clamp-3" style={{ color: 'var(--gray)' }}>
                                        {filling.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold" style={{ color: 'var(--purple2)' }}>
                                            +${filling.price}
                                        </span>
                                        <Button variant="outline" size="sm">
                                            Add to Cake
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Choose Your Cake CTA */}
                  <section 
        className="responsive-padding-y"
        style={{ 
          background: 'linear-gradient(90deg, var(--bg) 0%, var(--purple) 100%)'
        }}
      >
        <div className="mx-auto text-center responsive-padding-x">
                    <h2
                        className="text-3xl md:text-4xl mb-6"
                        style={{
                            fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                            color: 'var(--black)'
                        }}
                    >
                        Ready to Create Your Perfect Cake?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--gray)' }}>
                        Start with one of our base cakes and customize it with your favorite fillings.
                    </p>
                    <Button size="lg">
                        Choose Your Cake
                    </Button>
                </div>
            </section>
        </div>
    )
} 