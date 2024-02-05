import { PageTransition, ScrollReveal } from "@/components/animate";

import Footer from "@/components/Footer";
import Card from "@/components/Card";

const subjects: { name: string, description: string }[] = [
    {
        name: "PRE-CALCULUS",
        description: "Precalculus pertains to the mathematical prerequisites for the study of calculus. It is a course, or a set of courses, that includes algebra and trigonometry at a level which is designed to prepare students for the study of calculus, thus the name precalculus. Schools often distinguish between algebra and trigonometry as two separate parts of the coursework."
    }
]

export default function StrandSubjectBlog() {
    return (
        <main
            className={`h-screen w-screen p-5 pb-20 overflow-scroll`}
        >
            <PageTransition>
                <Card>
                    <div className="CardContent flex flex-col items-center space-y-12 p-5">
                        <div className="space-y-5">
                            <div
                                className="CardTitle font-bold text-5xl"
                            >
                                Grade 12 Subjects
                            </div>

                            {
                                subjects.map((subject, key) => (
                                    <div key={key} className="space-y-2">
                                        <h3 className="text-3xl">{subject.name}</h3>
                                        <p>{subject.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/stem/subjects" text="stem > subjects > twelve" />
        </main>
    );
}