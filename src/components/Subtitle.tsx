import { SubTitleProps } from "@/lib/definitions"
import clsx from "clsx"

const Subtitle = ({
    as: Comp = 'p',
    children,
    className,
    size
}: SubTitleProps) => {
    return (
        <Comp
            className={clsx(`text-brand-brown-200 font-libre uppercase `,
                size === 'lg' && 'text-fs-600',
                size === 'md' && 'text-fs-500',
                size === 'sm' && 'text-fs-400',
                className
            )}>
            {children}
        </Comp>
    )
}

export default Subtitle