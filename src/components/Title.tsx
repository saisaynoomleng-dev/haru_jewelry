import { TitleProps } from '@/lib/definitions'
import clsx from 'clsx'
import React from 'react'

const Title = ({
    as: Comp = 'h2',
    children,
    className,
    size
}: TitleProps) => {
    return (
        <Comp
            className={clsx(`font-semibold font-garamond`,
                size === 'lg' && 'text-fs-800',
                size === 'md' && 'text-fs-700',
                size === 'sm' && 'text-fs-600',
                className
            )}>
            {children}
        </Comp>
    )
}

export default Title