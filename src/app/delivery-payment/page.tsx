import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Truck, Clock, CreditCard, DollarSign, Smartphone } from 'lucide-react'

const deliveryOptions = [
    {
        icon: CheckCircle,
        title: 'Self pickup',
        description: 'Pick up your order from our kitchen',
        included: true
    },
    {
        icon: CheckCircle,
        title: 'Special Events',
        description: 'If it\'s a wedding or tiered cake, I deliver it myself',
        included: true
    },
    {
        icon: Truck,
        title: 'Delivery by taxi',
        description: 'Standard delivery service',
        included: false
    },
    {
        icon: Clock,
        title: 'Calculated Delivery',
        description: 'Delivery is not included in the price of the cake and is calculated based on the current taxi fare at the time of delivery',
        included: false
    },
]

const careInstructions = [
    {
        icon: Truck,
        title: 'Transporting the Cake',
        content: `Hold the cake by the bottom of the box — you may support the sides, but be nice to the handles, but please note that they are not reliable and may tear.

The best place to transport the cake is a car is on the floor in front of the passenger seat.

Never place the cake directly on a car seat.

The trunk is also acceptable, or — as a last resort! — on your lap, but be careful to keep the cake level at all times.`
    },
    {
        icon: Clock,
        title: 'Storage Tips',
        content: `Place the cake in the fridge as soon as possible, preferably in its container.

This way, it won't absorb any unwanted odors and will be protected from condensation.`
    },
    {
        icon: CheckCircle,
        title: 'Slice, Enjoy, and Repeat!',
        content: `Once you've cut your cake (and we hope you truly enjoy using it), any leftovers can be stored in the fridge for up to 48 hours.

Make sure the slices are covered or kept in an airtight container so keep them fresh and delicious.

But no pressure — we won't judge if there's nothing left to store.`
    },
]

const paymentOptions = [
    {
        title: 'Cheesecakes',
        description: 'Full payment is required online at checkout.',
        methods: ['Credit / Debit Card', 'Apple Pay / Google Pay'],
        deposit: false
    },
    {
        title: 'Custom Cakes',
        description: '50% deposit is required to confirm your order. You will receive a secure online invoice via',
        methods: ['Stripe or Square'],
        deposit: true,
        depositAmount: 50
    },
]

export default function DeliveryPaymentPage() {
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
                        Delivery & Payment
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray)' }}>
                        Learn about our delivery options and payment methods to make your cake ordering experience as smooth as possible.
                    </p>
                </div>
            </section>

            {/* Delivery Options */}
            <section className="responsive-padding-y" style={{ backgroundColor: 'var(--white)' }}>
                <div className="mx-auto responsive-padding-x">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/images/1440_px_Delivery & Payment.png"
                                alt="Delivery Options"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2
                                className="text-3xl md:text-4xl mb-8"
                                style={{
                                    fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                                    color: 'var(--black)'
                                }}
                            >
                                Delivery options
                            </h2>
                            <div className="space-y-6">
                                {deliveryOptions.map((option, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <option.icon className={`w-6 h-6 ${option.included ? 'text-green-600' : 'text-gray-400'}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1" style={{ color: 'var(--black)' }}>{option.title}</h3>
                                            <p className="text-sm" style={{ color: 'var(--gray)' }}>{option.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Care Instructions */}
            <section className="responsive-padding-y" style={{ backgroundColor: 'var(--bg)' }}>
                <div className="mx-auto responsive-padding-x">
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl md:text-4xl mb-4"
                            style={{
                                fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                                color: 'var(--black)'
                            }}
                        >
                            How to care for your cake
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {careInstructions.map((instruction, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div
                                        className="mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                        style={{ backgroundColor: 'var(--purple)', opacity: 0.1 }}
                                    >
                                        <instruction.icon className="w-6 h-6" style={{ color: 'var(--purple)' }} />
                                    </div>
                                    <CardTitle className="text-lg">{instruction.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--gray)' }}>
                                        {instruction.content}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Options */}
            <section className="responsive-padding-y" style={{ backgroundColor: 'var(--white)' }}>
                <div className="mx-auto responsive-padding-x">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2
                                className="text-3xl md:text-4xl mb-8"
                                style={{
                                    fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                                    color: 'var(--black)'
                                }}
                            >
                                Payment Options
                            </h2>

                            <div className="space-y-8">
                                {paymentOptions.map((option, index) => (
                                    <div key={index} className="space-y-4">
                                        <div className="flex items-start space-x-2">
                                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold mb-2" style={{ color: 'var(--black)' }}>{option.title}</h3>
                                                <p className="mb-3" style={{ color: 'var(--gray)' }}>{option.description}</p>
                                                <div className="space-y-1">
                                                    {option.methods.map((method, methodIndex) => (
                                                        <div key={methodIndex} className="flex items-center space-x-2 text-sm" style={{ color: 'var(--gray)' }}>
                                                            <span>-</span>
                                                            <span>{method}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                {option.deposit && (
                                                    <div className="mt-2 text-sm" style={{ color: 'var(--gray)' }}>
                                                        <span>- Stripe or Square</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-96 rounded-lg overflow-hidden">
                            <Image
                                src="/images/wrapper.png"
                                alt="Payment Methods"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section
                className="responsive-padding-y"
                style={{
                    background: 'linear-gradient(90deg, var(--bg) 0%, var(--purple) 100%)'
                }}
            >
                <div className="max-w-4xl mx-auto responsive-padding-x">
                    <Card className="text-center p-8">
                        <CardHeader>
                            <CardTitle
                                className="text-2xl md:text-3xl mb-4"
                                style={{
                                    fontFamily: 'var(--font-allura), "Allura", "Brush Script MT", cursive',
                                    color: 'var(--black)'
                                }}
                            >
                                Looking for help?
                            </CardTitle>
                            <CardDescription className="text-lg" style={{ color: 'var(--gray)' }}>
                                Leave your number, and I'll get in touch with you shortly to provide a consultation.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button size="lg">
                                Request a Call
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Features */}
            <section className="text-white responsive-padding-y" style={{ backgroundColor: '#1c1c1c' }}>
                <div className="mx-auto responsive-padding-x">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                style={{ backgroundColor: 'var(--purple)' }}
                            >
                                <Truck className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold mb-2">Address delivery within Sydney</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                style={{ backgroundColor: 'var(--purple)' }}
                            >
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold mb-2">Unique cake decoration</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                style={{ backgroundColor: 'var(--purple)' }}
                            >
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold mb-2">Only natural ingredients</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 