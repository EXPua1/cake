import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Heart, Star, Clock } from 'lucide-react'

const featuredCakes = [
  {
    id: 1,
    name: 'Classic Cheesecake',
    description: 'Creamy vanilla cheesecake with graham cracker crust',
    price: 45,
    image: '/images/1440_px_cheesecake.png',
    category: 'cheesecake'
  },
  {
    id: 2,
    name: 'Custom Wedding Cake',
    description: 'Personalized multi-tier cake for your special day',
    price: 120,
    image: '/images/wrapper.png',
    category: 'custom'
  },
  {
    id: 3,
    name: 'Madeleine Cookies',
    description: 'Traditional French shell-shaped sponge cakes',
    price: 25,
    image: '/images/1440_px_madlen.png',
    category: 'madeleine'
  },
]

const fillings = [
  { name: 'Raffaello', description: 'Coconut-almond sponge with ganache' },
  { name: 'Snickers', description: 'Chocolate sponge with caramel and peanuts' },
  { name: 'Tropical', description: 'Mango-passion fruit with coconut' },
  { name: 'Spiced Cherry', description: 'Cherry compote with cinnamon' },
]

const features = [
  {
    icon: Heart,
    title: 'Natural Ingredients',
    description: 'Only the finest natural ingredients in every creation'
  },
  {
    icon: Star,
    title: 'Unique Decoration',
    description: 'Each cake is individually decorated to perfection'
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Made fresh to order with same-day delivery available'
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center responsive-padding-x"
        style={{
          backgroundImage: `url('/images/Hero/Hero-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 hero-card">
          <h1
            className="mb-0 text-center hero-title"
            style={{
              fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',

              fontSize: '78px',
              lineHeight: "77%",
              color: 'var(--btn-color)',


            }}
          >
            La Crème Patisserie
          </h1>
          <p
            className="text-lg mb-6"
            style={{ color: 'var(--gray)', textAlign: 'right' }}
          >
            <span style={{ color: 'var(--purple)' }}>Cakes with unique design</span>
          </p>
          <div className="space-y-2"
            style={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: 'var(--black)',
              textAlign: 'left'
            }}>
            <p style={{ color: 'var(--gray)', textAlign: 'left' }}>
              Order delicious homemade cakes with custom designs, crafted with love and attention to detail!
            </p>
            <p style={{ color: 'var(--gray)', textAlign: 'left' }}>
              Tender sponge cakes, natural ingredients, and original designs for your special celebration!
            </p>
          </div>
          <div className="mt-6 flex justify-between items-center hero-cta-container">
            <Button
              className="hero-button"
              style={{
                fontFamily: 'var(--font-family)',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: 'var(--white)',
                background: 'var(--btn-color)',
                borderRadius: '2px',
                padding: '10px 16px',
                width: '205px',
                height: '44px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              CHOOSE YOUR CAKE
            </Button>
            <div className="flex gap-4 hero-social-icons">
              <Image
                src="/images/Hero/Facebook_Icon.svg"
                alt="Facebook"
                width={24}
                height={24}
                style={{ display: 'block' }}
              />
              <Image
                src="/images/Hero/Twitter_Icon.svg"
                alt="Twitter"
                width={24}
                height={24}
                style={{ display: 'block' }}
              />
              <Image
                src="/images/Hero/Instagram_Icon.svg"
                alt="Instagram"
                width={24}
                height={24}
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="responsive-padding-y" style={{ backgroundColor: 'var(--white)' }}>
        <div className="mx-auto responsive-padding-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                  style={{ backgroundColor: 'var(--purple)', opacity: 0.1 }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: 'var(--purple)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--black)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--gray)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="responsive-padding-y" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="mx-auto responsive-padding-x">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{
                fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                color: 'var(--black)'
              }}
            >
              Каталог
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray)' }}>
              Discover our selection of artisan cakes, each crafted with care and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCakes.map((cake) => (
              <Card key={cake.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{cake.name}</CardTitle>
                  <CardDescription>{cake.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: 'var(--purple)' }}>${cake.price}</span>
                    <Button variant="outline" size="sm">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/cakes">View All Cakes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fillings Section */}
      <section className="responsive-padding-y" style={{ backgroundColor: 'var(--white)' }}>
        <div className="mx-auto responsive-padding-x">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{
                fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                color: 'var(--black)'
              }}
            >
              Начинки
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--gray)' }}>
              Choose from our variety of premium fillings to customize your perfect cake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fillings.map((filling, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border transition-colors hover:opacity-80"
                style={{
                  borderColor: 'var(--purple)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--black)' }}>{filling.name}</h3>
                <p className="text-sm" style={{ color: 'var(--gray)' }}>{filling.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/fillings">Explore All Fillings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="responsive-padding-y"
        style={{
          background: 'linear-gradient(90deg, var(--bg) 0%, var(--purple) 100%)',
          opacity: 0.7
        }}
      >
        <div className="mx-auto responsive-padding-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{
                  fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                  color: 'var(--black)'
                }}
              >
                Про меня
              </h2>
              <div className="space-y-4" style={{ color: 'var(--gray)' }}>
                <p>
                  Привет! Меня зовут Анна, и я кондитер с многолетним опытом создания уникальных тортов и десертов.
                </p>
                <p>
                  Каждый торт — это произведение искусства, созданное с любовью и вниманием к деталям.
                  Я использую только натуральные ингредиенты высшего качества, чтобы каждый кусочек был незабываемым.
                </p>
                <p>
                  Моя специализация — это персонализированные торты для особых событий: дни рождения,
                  свадьбы, годовщины и другие важные моменты в вашей жизни.
                </p>
              </div>
              <Button className="mt-6" asChild>
                <Link href="/about">Узнать больше</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/wrapper.png"
                alt="About La Crème Patisserie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="responsive-padding-y" style={{ backgroundColor: '#1c1c1c' }}>
        <div className="mx-auto text-center responsive-padding-x">
          <h2
            className="text-3xl md:text-4xl mb-6 text-white"
            style={{ fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive' }}
          >
            Готовы заказать?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной, и я создам идеальный торт для вашего особенного события
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link href="tel:+380671444444">Позвонить сейчас</Link>
            </Button>
            <Button variant="outline" size="lg" style={{ color: 'white', borderColor: 'white' }}>
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
