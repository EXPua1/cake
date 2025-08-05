export interface Cake {
    _id: string
    name: string
    description: string
    price: number
    image: string
    category: 'cheesecake' | 'custom' | 'madeleine'
    fillings?: Filling[]
    weight?: number
    servings?: number
    available: boolean
}

export interface Filling {
    _id: string
    name: string
    description: string
    image: string
    price: number
    category: string
}

export interface Order {
    _id?: string
    customerName: string
    customerPhone: string
    customerEmail?: string
    deliveryAddress?: string
    deliveryDate: Date
    deliveryTime?: string
    cake: Cake
    selectedFilling?: Filling
    weight?: number
    customMessage?: string
    totalPrice: number
    status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
    notes?: string
    createdAt?: Date
}

export interface ContactForm {
    name: string
    phone: string
    message: string
}

export interface DeliveryOption {
    type: 'pickup' | 'delivery' | 'special'
    title: string
    description: string
    price?: number
}

export interface PaymentOption {
    type: 'card' | 'cash' | 'online'
    title: string
    description: string
    deposit?: number
} 