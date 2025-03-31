import Subtitle from './Subtitle'
import Title from './Title'
import CallToAction from './CallToAction'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 md:gap-5 ">
            <div className="flex justify-center items-center flex-col text-center bg-gray-500/10 p-10 gap-3 pb-0">
                <Subtitle>
                    new collection
                </Subtitle>
                <Title size="md">
                    Modern Earrings
                </Title>
                <p className="text-brand-black/50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, soluta!</p>
                <CallToAction
                    variant="green"
                    href={`/products`} >
                    SHOP NOW
                </CallToAction>

                <Image
                    src='/hero-1.png'
                    width={200}
                    height={200}
                    alt="a girl posing to show her earring"
                    priority
                    className="" />
            </div>

            <div className="grid gap-3">
                <div className="flex bg-gray-500/10 p-10 gap-3">
                    <div className="flex flex-col gap-5 items-start">
                        <Subtitle>
                            new collection
                        </Subtitle>
                        <Title size="md">
                            Modern Necklace
                        </Title>
                        <p className="text-brand-black/50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, soluta!</p>
                        <CallToAction
                            variant="green"
                            href={`/products`} >
                            SHOP NOW
                        </CallToAction>
                    </div>

                    <Image
                        src='/hero-2.png'
                        width={200}
                        height={200}
                        alt="a girl posing to show her earring"
                        priority
                        className="object-cover" />
                </div>

                <div className="flex bg-gray-500/10 p-10 gap-3">
                    <div className="flex flex-col gap-5 items-end text-right order-1 ">
                        <Subtitle>
                            new collection
                        </Subtitle>
                        <Title size="md">
                            Modern Necklace
                        </Title>
                        <p className="text-brand-black/50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, soluta!</p>
                        <CallToAction
                            variant="green"
                            href={`/products`} >
                            SHOP NOW
                        </CallToAction>
                    </div>

                    <Image
                        src='/hero-3.png'
                        width={200}
                        height={200}
                        alt="a girl posing to show her earring"
                        priority
                        className="object-cover" />
                </div>

            </div>
        </div>
    )
}

export default Hero