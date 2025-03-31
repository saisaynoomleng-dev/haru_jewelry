import { BoundedProps } from "@/lib/definitions"
import clsx from 'clsx';

const Bounded = ({
    as: Comp = "section",
    children,
    className
}: BoundedProps) => {
    return (
        <Comp
            className={clsx(`custom-container px-2 py-5`, className)}
        >
            {children}
        </Comp>
    )
}

export default Bounded