import { animate, stagger } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image"

import { PageTransition } from "@/components/animate";
import Footer from "@/components/Footer";
import Card from "@/components/Card"

export default function AboutAppBlog() {
    const [media, setMedia] = useState<string>("")
    const [content, setContent] = useState<string>("")

    useEffect(() => {
        animate(".CardContent > .CardTitle, .CardContent > .CardDescription, .CardContent > .CardDescription > *",
            { x: [100, 0], opacity: [0, 1] },
            { delay: stagger(0.1, { startDelay: 0.25 }) }
        )

        setMedia(String(localStorage.getItem("app-media")))
        setContent(String(localStorage.getItem("app-content")))
    })

    return (
        <main
            className={`h-screen w-screen p-5 pb-20 overflow-scroll`}
        >
            <PageTransition>
                <Card>
                    <div className="CardMedia w-full flex justify-center">
                        <Image src={media} alt="Card Media" height={200} width={200} className="aspect-square" />
                    </div>
                    <div className="CardContent flex flex-col space-y-5 p-5">
                        <h1
                            className="CardTitle font-bold text-4xl"
                        >
                            About the App!
                        </h1>
                        <p className="CardDescription space-y-5">
                            {content}
                        </p>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/" text="app > about" />
        </main>
    );
}