import Image from "next/image"
import Bounded from "./Bounded"
import Title from "./Title"
import Subtitle from "./Subtitle"
import CallToAction from "./CallToAction"

const Hero = () => {
    return (
        <Bounded
            className="min-h-dvh bg-brand-green pt-32 w-full mx-0 relative flex gap-10 flex-col md:flex-row">
            <div className="flex flex-col gap-5 text-right">
                <Title
                    size="lg"
                    className="text-brand-brown-200">
                    New Summer Collection
                </Title>

                <Subtitle
                    size="md"
                    className="text-brand-brown-200/50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.
                </Subtitle>

                <Subtitle
                    size="md"
                    className="text-brand-brown-200/50">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est delectus nostrum vitae voluptates maxime quibusdam omnis illo! Deleniti, consectetur impedit!
                </Subtitle>

                <div className="flex gap-5 self-end">
                    <CallToAction
                        variant="full"
                        href={`/products`}
                    >
                        Shop the collection
                    </CallToAction>

                    <CallToAction
                        variant="brown"
                        href={`/products`}>
                        Discover More
                    </CallToAction>
                </div>


            </div>

            <Image
                src='/hero.jpg'
                width={500}
                height={500}
                alt="hero image"
                className="max-md:mx-auto md:ml-auto rounded-sm relative z-10" />
        </Bounded>
    )
}

export default Hero