import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'USD',
    }).format(price)
}

export function formatDate(date: Date) {
    return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date)
} 