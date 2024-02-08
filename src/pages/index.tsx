import { animate, stagger } from "framer-motion"
import { useEffect } from "react";

import { PageTransition } from "@/components/animate";
import Card from "@/components/Card"
import Button from "@/components/Button"
import { QuestionMarkCircleIcon, LightBulbIcon, FaceSmileIcon } from "@heroicons/react/24/solid"

export default function Home() {
    useEffect(() => {
       animate(".CardContent > .CardTitle, .CardContent > .CardDescription > *",
            { x: [100, 0], opacity: [0, 1] },
            { delay: stagger(0.1, { startDelay: 0.25 }) }
        )
    })

    return (
        <main
            className={`h-screen w-screen flex items-center p-5`}
        >
            <PageTransition>
                <Card>
                    <div className="CardContent flex flex-col items-center space-y-12 p-5">
                        <h1
                            className="CardTitle font-bold text-5xl tracking-tight text-center"
                        >
                            Welcome to STEM!
                        </h1>

                        <div className="CardDescription mb-32 space-y-5 text-center flex flex-col ">
                            <Button
                                href="/stem"
                                title="About STEM"
                                symbol={<QuestionMarkCircleIcon />}
                                description="Find in-depth information about the STEM strand and its subjects."
                            />
                            <Button
                                href="/quiz"
                                title="Assessment"
                                symbol={<LightBulbIcon />}
                                description="Test your knowledge!"
                            />
                            <Button
                                href="/app"
                                title="About the App"
                                symbol={<FaceSmileIcon />}
                                description="Info about the application."
                            />
                        </div>
                    </div>
                </Card>
            </PageTransition >
        </main>
    );
}
