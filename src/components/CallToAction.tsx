import { CallToActionProps } from "@/lib/definitions"
import clsx from "clsx"
import Link from "next/link"


const CallToAction = ({
    children,
    href,
    variant,
    className
}: CallToActionProps) => {
    return (
        <Link
            href={href}
            className={clsx(' text-brand-black font-semibold cursor-pointer rounded-none border-2 px-4 py-2',
                variant === 'brown' && 'border-brand-brown-100 hover:border-brand-brown-200 text-brand-brown-100 hover:text-brand-brown-200',
                variant === 'green' && 'border-brand-green/50 hover:border-brand-green',
                variant === 'full' && 'bg-brand-brown-100 text-brand-black hover:bg-brand-brown-200 brown-200 border-none',
                className
            )}>
            {children}
        </Link>
    )
}

export default CallToAction