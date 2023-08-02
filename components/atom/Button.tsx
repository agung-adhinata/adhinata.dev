import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
	"inline-flex rounded-md items-center justify-center",
	{
		variants: {
			variant: {
				primary:
					"bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 dark:text-black text-white",
				outline:
					"bg-transparent border-2 border-black hover:border-black/80 text-black",
			},
			size: {
				default: "px-4 py-2",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot : "button";
		return (
			<Component
				className={twMerge(
					buttonVariants({ variant, size, className })
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";
export { Button };
