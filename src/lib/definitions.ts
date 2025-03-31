
// Bounded Type
export type BoundedProps = {
    as?: React.ElementType
    className?: string
    children: React.ReactNode
}

// Title Type
export type TitleProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4'
    children: React.ReactNode
    className?: string
    size: 'lg' | 'md' | 'sm'
}

// Subtitle Type
export type SubTitleProps = {
    as?: React.ElementType
    children: React.ReactNode
    className?: string
    size?: 'lg' | 'md' | 'sm'
}

// Call to action
export type CallToActionProps = {
    children: React.ReactNode
    href: string
    variant: 'green' | 'brown'
    className?: string
}


