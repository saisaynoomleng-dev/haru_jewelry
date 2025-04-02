import Banner from "@/components/Banner";
import BlogCard from "@/components/BlogCard";
import Bounded from "@/components/Bounded";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import NewsLetterSub from "@/components/NewsLetterSub";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data: blogs } = await sanityFetch({ query: BLOGS_QUERY });

  return (
    <main>
      <Hero />
      <Banner />

      {/* shop by category */}

      {/* about us breif */}

      {/* top rating products */}

      {/* new arrival products */}

      {/* testimonials */}

      {/* blogs */}
      <Bounded
        className='flex flex-col gap-3'
      >
        <Subtitle>news and blogs</Subtitle>
        <div className="flex justify-between items-center">

          <Title
            size='md'>
            Our latest News & Blogs
          </Title>

          <CallToAction
            href="/blogs"
            variant="full">
            View All Blogs
          </CallToAction>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(blog => (
            <BlogCard key={blog?.slug?.current} {...blog} />
          ))}
        </div>
      </Bounded>


      {/* follow us on instagram */}

      {/* faq */}

      <NewsLetterSub />

      {/* footer */}

    </main>
  );
}
