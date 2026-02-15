import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Note: Radix UI is standard but I haven't installed it. I'll implement a simple button without Slot for now to avoid installing more deps unless requested, or I'll just skip the Slot part.
// Actually, I'll just make a standard button component.

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-electric-blue text-navy-900 hover:bg-electric-blue/90 shadow-[0_0_20px_-5px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_-5px_rgba(0,240,255,0.7)]",
                destructive:
                    "bg-red-500 text-slate-50 hover:bg-red-500/90",
                outline:
                    "border border-electric-blue/30 bg-transparent text-electric-blue hover:bg-electric-blue/10",
                secondary:
                    "bg-navy-800 text-white hover:bg-navy-700 border border-white/10",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-electric-violet to-electric-blue text-white shadow-lg shadow-electric-violet/25 hover:shadow-electric-violet/40 hover:scale-105",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-md px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
