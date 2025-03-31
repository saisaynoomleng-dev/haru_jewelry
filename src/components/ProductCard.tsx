import { urlFor } from "@/sanity/lib/image";
import { PRODUCTS_QUERYResult } from "@/sanity/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from 'react-icons/fa';

const ProductCard = ({
    className,
    ...props
}: PRODUCTS_QUERYResult[number] & { className?: string }) => {
    const {
        name,
        slug,
        images,
        price,
        brand,
        discount,
        instock,
        reviews
    } = props || {};


    const mainImageURL = images && images[0]?.asset?.url;
    const hoverImageURL = images && images[1]?.asset?.url;

    return (
        <Link
            href={`/products/${slug?.current}`}
            className={clsx('flex flex-col gap-2 border border-red-500 group cursor-pointer max-w-[300px] p-2', className)}>
            <div className="relative min-w-full">
                {mainImageURL &&
                    <Image
                        src={urlFor(mainImageURL).url()}
                        width={150}
                        height={150}
                        alt={name || ''}
                        className="group-hover:hidden object-cover min-w-full mx-auto rounded-sm"
                        priority
                    />
                }

                {hoverImageURL &&
                    <Image
                        src={urlFor(hoverImageURL).url()}
                        width={150}
                        height={150}
                        alt={name || ''}
                        className="hidden 
                        group-hover:block object-cover min-w-full mx-auto rounded-sm"
                        priority
                    />
                }

                <div className="absolute top-0 left-[.3rem]">
                    <p className="text-brand-white bg-brand-green px-2 py-2 rounded-sm text-fs-300">{discount}% off</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 text-fs-300">
                <div className="flex justify-between">
                    <p className="">
                        {instock && instock > 0 ? (
                            `Instock: ${instock}`
                        ) : ('Out of Stock')}
                    </p>
                    <p>

                        <span>
                            <FaStar />
                            {/* calcuate rating number */}
                        </span>
                    </p>
                </div>
                <p className="font-semibold">{name}</p>
            </div>
        </Link>
    )
}

export default ProductCard