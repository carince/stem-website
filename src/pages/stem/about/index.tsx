import { PageTransition } from "@/components/animate";
import { animate, stagger } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image"

import Footer from "@/components/Footer";
import Card from "@/components/Card"

export default function STEMAbout() {
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
                        <Image src="/studying.gif" alt="studying" width={500} height={280} className="w-full" />
                    </div>

                    <div className="CardContent flex flex-col items-center space-y-5 p-5">
                        <h1
                            className="CardTitle font-bold text-3xl"
                        >
                            Science, Technology, Engineering, Mathematics
                        </h1>
                        <p className="CardDescription">
                        STEM stands for Science, Technology, Engineering, and Mathematics and it is an interdisciplinary strand that can enhance students critical thinking, problem solving skills, creative thinking, and innovation. As it contains multiple subjects, it can prepare students for a wide variety of careers and complex challenges in their respective fields.
                        </p>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/stem" text="stem > about" />
        </main>
    );
}