import { CallToActionProps } from "@/lib/definitions"
import clsx from "clsx"
import Link from "next/link"


const CallToAction = ({
    children,
    href,
    variant
}: CallToActionProps) => {
    return (
        <Link
            href={href}
            className={clsx('bg-transparent text-brand-black font-semibold cursor-pointer rounded-none border-2 px-4 py-2',
                variant === 'brown' && 'border-brand-brown-100 hover:border-brand-brown-200',
                variant === 'green' && 'border-brand-green/50 hover:border-brand-green'
            )}>
            {children}
        </Link>
    )
}

export default CallToAction