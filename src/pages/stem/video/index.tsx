import { PageTransition } from "@/components/animate";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Card from "@/components/Card"

export default function StrandVideo() {
    const [media, setMedia] = useState<undefined | string>(undefined)

    useEffect(() => {
        if (localStorage.getItem("stem-video") === null) {
            setMedia(undefined)
        } else {
            setMedia(String(localStorage.getItem("stem-video")))
        }
    }, [])

    return (
        <main
            className={`w-screen h-screen flex items-center overflow-scroll p-5`}
        >
            <PageTransition>
                <Card>
                    <div className="CardMedia w-full">
                        <iframe src={media} allow="autoplay" allowFullScreen={true} className="aspect-video w-full"></iframe>
                    </div>

                    <div className="CardContent space-y-5 p-5">
                        <div
                            className="CardTitle font-bold text-4xl"
                        >
                            Campaign Video
                        </div>

                        <div className="CardDescription mb-32 flex flex-col space-y-5">
                            We hope you like our strand video!
                        </div>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/stem" text="stem > video" />
        </main>
    );
}
