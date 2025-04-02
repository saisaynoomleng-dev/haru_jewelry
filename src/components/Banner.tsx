import { BiSolidPackage, BiSupport, BiWallet } from "react-icons/bi"
import Bounded from "./Bounded"

const Banner = () => {
    return (
        <Bounded
            className="grid md:grid-cols-3 gap-5 p-5">

            <div className="flex items-center gap-5">
                <p className="relative">
                    <span className="text-fs-800 relative z-50"><BiSolidPackage />
                    </span>
                    <span className="w-[40px] aspect-square rounded-full bg-brand-brown-100 absolute z-10 top-[1rem] left-[1rem] "></span>
                </p>

                <div className="flex flex-col gap-1 p-3">
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-slate-500 text-fs-300">Free shipping over $300</p>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <p className="relative">
                    <span className="text-fs-800 relative z-50"><BiWallet />
                    </span>
                    <span className="w-[40px] aspect-square rounded-full bg-brand-brown-100 absolute z-10 top-[1rem] left-[1rem] "></span>
                </p>

                <div className="flex flex-col gap-1 p-3">
                    <p className="font-semibold">Flexible Payment</p>
                    <p className="text-slate-500 text-fs-300">Multiple secure payment options</p>
                </div>
            </div>

            <div className="flex items-center gap-5">
                <p className="relative">
                    <span className="text-fs-800 relative z-50"><BiSupport />
                    </span>
                    <span className="w-[40px] aspect-square rounded-full bg-brand-brown-100 absolute z-10 top-[1rem] left-[1rem] "></span>
                </p>

                <div className="flex flex-col gap-1 p-3">
                    <p className="font-semibold">24x7 Support</p>
                    <p className="text-slate-500 text-fs-300">We support online all days</p>
                </div>
            </div>
        </Bounded>
    )
}

export default Banner