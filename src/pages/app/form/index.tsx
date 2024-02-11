import { PageTransition } from "@/components/animate";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Card from "@/components/Card"

export default function Assessment() {
    const [quiz, setQuiz] = useState<string>("")

    useEffect(() => {
        setQuiz(String(localStorage.getItem("stem-quiz")))
    }, [])

    return (
        <main
            className={`h-screen w-screen p-5 pb-20 overflow-scroll`}
        >
            <PageTransition className="flex w-full h-full">
                <Card className="grow">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfL55Bd6in018Lf8YO-hQSbCrFW7kzaQkzd7k0BUa0M2ZG18A/viewform" className="w-full h-full"></iframe>
                </Card>
            </PageTransition>
            <Footer href="/app" text="app / form" />
        </main>
    );
}
