import Banner from "@/components/Banner"
import Bounded from "@/components/Bounded"
import LinkSegment from "@/components/LinkSegment"
import NewsLetterSub from "@/components/NewsLetterSub"
import Title from "@/components/Title"
import { formatDate } from "@/lib/actions"
import { urlFor } from "@/sanity/lib/image"
import { sanityFetch } from "@/sanity/lib/live"
import { BLOG_QUERY } from "@/sanity/lib/queries"
import { components } from "@/sanity/portableTextComponents"
import { PortableText } from "next-sanity"
import Image from "next/image"
import { notFound } from "next/navigation"

const BlogDetailPage = async ({
    params
}: { params: Promise<{ slug: string }> }) => {
    const { data: blog } = await sanityFetch({
        query: BLOG_QUERY,
        params: await params
    })

    if (!blog) {
        notFound();
    }

    return (
        <Bounded
            className="flex flex-col gap-5">
            {/* <LinkSegment>
                <p>Home &gt; Blogs &gt; Blog Detail</p>
            </LinkSegment> */}

            {blog?.image?.asset?.url && (
                <Image
                    src={urlFor(blog?.image.asset.url)
                        .width(800)
                        .height(200)
                        .auto('format')
                        .quality(100)
                        .url()
                    }
                    width={800}
                    height={200}
                    alt={blog?.image.alt || ''}
                    priority
                    className="object-cover min-w-full" />
            )}

            <p className="bg-brand-brown-100 self-center px-5 rounded-sm py-1 font-semibold">{blog?.category}</p>

            <Title
                as="h3"
                size="md"
                className="text-center font-libre">
                {blog?.title}
            </Title>

            <div className="flex gap-5 items-center justify-center">
                {blog?.author?.image?.asset?.url ? (
                    <Image
                        src={urlFor(blog.author.image.asset.url)
                            .width(50)
                            .height(50)
                            .auto('format')
                            .format('webp')
                            .quality(100)
                            .url()
                        }
                        width={50}
                        height={50}
                        alt=''
                        priority
                        className="rounded-full" />
                ) : null}

                <div >
                    <p>Written by <span>{blog.author?.name}</span></p>
                    <p className="text-brand-black/50">{blog.publishedAt && (<span>{formatDate(blog.publishedAt)}</span>)} | <span>{blog.duration} min Read</span></p>
                </div>
            </div>

            <p className="text-fs-300 text-justify">
                {blog.author?.bio}
            </p>

            <hr />

            <div className="grid md:grid-cols-3 gap-3">
                <div className="flex flex-col gap-3">
                    <div>
                        <Title
                            className="font-libre"
                            size="sm"
                            as="h3">
                            Filter by Categories
                        </Title>
                    </div>
                </div>

                <article className="md:col-span-2 flex flex-col gap-1 prose md:prose-lg text-justify">
                    {blog.description ? (
                        <PortableText value={blog.description} components={components} />
                    ) : null}
                </article>
            </div>

            <Banner />

            <NewsLetterSub />







        </Bounded>
    )
}


export default BlogDetailPage