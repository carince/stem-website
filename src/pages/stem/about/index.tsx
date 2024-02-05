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
                            className="CardTitle font-bold text-5xl"
                        >
                            Science, Technology, Engineering, Mathematics
                        </h1>
                        <p className="CardDescription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi. Elit duis tristique sollicitudin nibh sit. Leo urna molestie at elementum. Elementum integer enim neque volutpat ac tincidunt vitae. Nulla facilisi nullam vehicula ipsum a arcu. Faucibus a pellentesque sit amet. Sed odio morbi quis commodo. Morbi leo urna molestie at elementum eu facilisis sed. Quisque non tellus orci ac auctor augue mauris augue. <br />
                        </p>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/stem" text="stem > about" />
        </main>
    );
}