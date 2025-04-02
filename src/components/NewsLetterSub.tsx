import Bounded from "./Bounded"
import Subtitle from "./Subtitle"
import Title from "./Title"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const NewsLetterSub = () => {
    return (
        <Bounded
            className="text-center newsletter-bg py-20 mx-0">
            <div
                className="max-w-[70%] mx-auto flex flex-col gap-5">
                <Subtitle
                    size="md">
                    our newsletter
                </Subtitle>

                <Title size="md" className="leading-[1] text-brand-white capitalize">
                    Subscribe to our newsletter to get updates to our latest collection
                </Title>

                <p className="text-brand-white/50">Get 20% off on your first order just by subscribing to our newsletter.</p>

                <form action="" className="min-w-full flex gap-4 items-end">
                    <Input
                        className="bg-transparent border-brand-brown-100 outline-none focus:border-brand-brown-200 focus:border-2"
                        placeholder="Email Address"
                        name='email' />

                    <Button
                        className="min-h-full rounded-sm">
                        Subscribe
                    </Button>
                </form>
            </div>
        </Bounded>
    )
}

export default NewsLetterSub