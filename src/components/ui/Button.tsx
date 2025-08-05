import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'secondary'
    size?: 'default' | 'sm' | 'lg'
    asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        return (
            <Comp
                className={cn(
                    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    {
                        'text-white hover:opacity-90 active:opacity-80': variant === 'default',
                        'border text-current hover:bg-current hover:bg-opacity-10 active:bg-opacity-20': variant === 'outline',
                        'text-current hover:bg-current hover:bg-opacity-10 active:bg-opacity-20': variant === 'ghost',
                        'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300': variant === 'secondary',
                    },
                    {
                        'h-10 py-2 px-4': size === 'default',
                        'h-9 px-3 text-xs': size === 'sm',
                        'h-11 px-8 text-base': size === 'lg',
                    },
                    className
                )}
                style={{
                    ...(variant === 'default' && {
                        backgroundColor: 'var(--purple)',
                    }),
                    ...(variant === 'outline' && {
                        borderColor: 'var(--purple)',
                        color: 'var(--purple)',
                    }),
                    ...(variant === 'ghost' && {
                        color: 'var(--purple)',
                    }),
                }}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'

export { Button } 