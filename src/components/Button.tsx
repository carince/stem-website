import Link from "next/link"
import { motion } from "framer-motion"

export default function Button({ href, title, symbol, description }: { href: string, title: string, symbol?: any, description?: string }) {
    return (
        <motion.div
            className="rounded-lg border px-5 py-4 border-fg0 bg-bg1 text-fg1 drop-shadow-xl"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <Link
                href={href}
            >
                <h2 className={`mb-2 text-2xl font-semibold`}>
                    {`${title} `}
                    {
                        symbol && (
                            <span className="aspect-square w-[1em] top-[0.125em] relative inline-flex self-center">
                                {symbol}
                            </span>
                        )
                    }
                </h2>
                {
                    description && (
                        <p className={`m-0 max-w-[30ch] text-sm`}>
                            {description}
                        </p>
                    )
                }
            </Link>
        </motion.div>
    )
}