import { motion } from "framer-motion"
import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import Image from "next/image"

export default function Footer({ href, text }: { href: Url, text: string }) {
    return (
        <motion.footer
            className="absolute bottom-0 left-0 w-full flex flex-row items-center justify-between py-2 px-5 bg-[hsl(234,26%,90%)] border-fg0 border-t"
            initial={{ y: 75, opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    delay: 0
                }
            }}
            exit={{ y: 75, opacity: 0 }}
        >
            <div className="flex flex-row items-center space-x-3">
                <Image src="/dancing-cat.gif" width={34} height={34} alt="dancing cat"/>
                <h1
                    className="pl-1 text-fg1 font-mono"
                >
                    {`${text}`}
                </h1>
            </div>
            <div
                className="flex justify-center items-center border rounded-full w-10 aspect-square border-fg0 text-fg0 bg-fg0/10"
            >
                <Link href={href}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
            </div>
        </motion.footer>
    )
}