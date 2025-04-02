import clsx from "clsx"

const LinkSegment = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <div
            className={clsx(`h-32 animated-shape-bg flex items-start text-brand-brown-100 font-bold px-2 pt-8`, className)}>
            {children}
        </div>
    )
}

export default LinkSegment