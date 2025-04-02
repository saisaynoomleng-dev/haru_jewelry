import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { BLOGS_QUERYResult } from '@/sanity/types'
import clsx from 'clsx'
import { formatDate } from '@/lib/actions'

const BlogCard = ({
    className,
    ...props
}: BLOGS_QUERYResult[number] & { className?: string }) => {
    const {
        slug,
        image,
        title,
        publishedAt,
        category,
        duration
    } = props
    return (
        <Link
            className={clsx(`overflow-hidden flex flex-col gap-4`, className)}
            href={`/blogs/${slug?.current}`}
            key={slug?.current}>
            <div className="relative">
                {image?.asset?.url && (
                    <Image
                        src={urlFor(image.asset.url).url()}
                        width={300}
                        height={400}
                        alt={image.alt || ''}
                        priority
                        className="max-w-[80%] mx-auto relative z-10" />
                )}

                {publishedAt &&
                    <p className='absolute left-0 top-[50%] z-20 text-fs-300 bg-brand-red px-2 text-brand-white py-1'>
                        {formatDate(publishedAt)}
                    </p>
                }
            </div>

            <div className="flex flex-col">
                <p className="font-semibold text-fs-500">{title}</p>
                <div className="flex justify-between">
                    <p className="font-semibold text-fs-300 bg-brand-green/40 px-2 rounded-sm text-brand-white self-start">{category}</p>
                    <p className="text-brand-black/50">{duration} min read</p>
                </div>
                <p className="underline text-brand-green self-end">Read More</p>
            </div>
        </Link>
    )
}

export default BlogCard