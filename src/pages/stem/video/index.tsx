import { PageTransition, ScrollReveal } from "../../../components/animate";

import Footer from "@/components/Footer";
import Card from "@/components/Card"

export default function StrandVideo() {
    return (
        <main
            className={`w-screen h-screen flex items-center p-5`}
        >
            <PageTransition>
                <Card>
                    <div className="CardMedia w-full">
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1gjoDkdrvo_2w5TF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>

                    <div className="CardContent space-y-5 p-5">
                        <div
                            className="CardTitle font-bold text-5xl"
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
