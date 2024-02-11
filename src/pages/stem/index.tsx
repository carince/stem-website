
import { animate, stagger } from "framer-motion";
import { useEffect } from "react";

import { PageTransition } from "@/components/animate";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { QuestionMarkCircleIcon, VideoCameraIcon, ClipboardDocumentListIcon, GlobeAltIcon } from "@heroicons/react/24/solid"

export default function StrandHome() {
    useEffect(() => {
        animate(".CardContent > .CardTitle, .CardContent > .CardDescription > *",
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
                    <div className="CardContent flex flex-col items-center space-y-12 p-5">
                        <div
                            className="CardTitle font-bold text-4xl"
                        >
                            Science, Technology, Engineering, Mathematics
                        </div>
                        <div className="CardDescription mb-32 flex flex-col space-y-5 text-center">
                            <Button
                                href="/stem/about"
                                title="About STEM"
                                symbol={(<QuestionMarkCircleIcon />)}
                                description="What is STEM exactly? 🤔😱"
                            />
                            <Button
                                href="/stem/video"
                                title="Campaign Video"
                                symbol={(<VideoCameraIcon />)}
                                description="Watch our strand campaign video!"
                            />
                            <Button
                                href="/stem/subjects"
                                title="Subjects"
                                symbol={(<ClipboardDocumentListIcon />)}
                                description="Watch our strand campaign video!"
                            />
                            <Button
                                href="/stem/sources"
                                title="Sources"
                                symbol={(<GlobeAltIcon />)}
                                description="Sources we used for creating the app!"
                            />
                        </div>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/" text="stem" />
        </main>
    );
}
