import { animate, stagger } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image"

import { PageTransition } from "@/components/animate";
import Footer from "@/components/Footer";
import Card from "@/components/Card"

export default function AboutAppBlog() {
    useEffect(() => {
        animate(".CardContent > .CardTitle, .CardContent > .CardDescription, .CardContent > .CardDescription > *",
            { x: [100, 0], opacity: [0, 1] },
            { delay: stagger(0.1, { startDelay: 0.25 }) }
        )
    })

    return (
        <main
            className={`h-screen w-screen p-5 pb-20 overflow-scroll`}
        >
            <PageTransition>
                <Card>
                    <div className="CardMedia w-full">
                        <Image src="/stem-website/coding.gif" alt="writing" width={500} height={280} className="w-full" />
                    </div>
                    <div className="CardContent flex flex-col items-center space-y-5 p-5">
                        <h1
                            className="CardTitle font-bold text-5xl"
                        >
                            About the App!
                        </h1>
                        <div className="CardDescription space-y-5">
                            <p>
                                inamo mit app inventor
                            </p>
                        </div>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/" text="app > about" />
        </main>
    );
}