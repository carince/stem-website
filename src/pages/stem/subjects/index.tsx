import Link from "next/link";
import Image from "next/image";
import { animate, stagger } from "framer-motion";
import { useEffect } from "react";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { PageTransition } from "@/components/animate";

export default function StrandSubject() {
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
                        <Image src="/stem-website/writing.gif" alt="writing" width={500} height={280} className="w-full" />
                    </div>
                    <div className="CardContent space-y-5 p-5">
                        <h1
                            className="CardTitle font-bold text-4xl"
                        >
                            STEM Subjects
                        </h1>

                        <p className="CardDescription mb-32 flex flex-col space-y-5">
                            This page offers comprehensive information on the topics you will come across in the STEM field, encompassing the subjects from Grade 11 through Grade 12.<br />
                            <div className="flex flex-row justify-evenly space-x-5 text-center">
                                <Button href="/stem/subjects/eleven" title="Grade 11" />
                                <Button href="/stem/subjects/twelve" title="Grade 12" />
                            </div>
                        </p>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/stem" text="stem > subjects" />
        </main>
    );
}
