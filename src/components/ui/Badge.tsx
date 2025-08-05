import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = 'default', style, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
                    {
                        'border-transparent text-white': variant === 'default',
                        'border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'secondary',
                        'border-transparent text-white': variant === 'destructive',
                        'border-gray-200 text-gray-600 hover:bg-gray-50': variant === 'outline',
                    },
                    className
                )}
                style={{
                    ...(variant === 'default' && {
                        backgroundColor: 'var(--purple)',
                        borderColor: 'var(--purple)',
                    }),
                    ...(variant === 'destructive' && {
                        backgroundColor: 'var(--red)',
                        borderColor: 'var(--red)',
                    }),
                    ...style,
                }}
                {...props}
            />
        )
    }
)

Badge.displayName = 'Badge'

export { Badge } 