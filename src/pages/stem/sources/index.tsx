import { PageTransition } from "@/components/animate";

import Footer from "@/components/Footer";
import Card from "@/components/Card";

const sources: { subject: string, source: string }[] = [
    {
        subject: "Oral Communication with Context",
        source: "https://www.scribd.com/document/518933353/oral-com-week-1"
    },
    {
        subject: "INTRODUCTION TO THE PHILOSOPHY OF THE HUMAN PERSON",
        source: "https://www.courses.com.ph/senior-high-school-core-subject-introduction-to-the-philosophy-of-the-human-person/"
    },
    {
        subject: "PAGSULAT NG FILIPINO SA LARANGAN NG AKADEMIKO",
        source: "https://www.scribd.com/document/546373263/Modules-Filipino-sa-Larangan-ng-Akademik"
    },
    {
        subject: "Personal Research",
        source: "https://www.courses.com.ph/senior-high-school-contextualized-subject-practical-research-1/"
    },
    {
        subject: "Personal Development",
        source: "https://www.courses.com.ph/senior-high-school-core-subject-personal-development/"
    },
    {
        subject: "Pagbasa at Pagsusuri ng Iba’t Ibang Teksto Tungo sa Pananaliksik",
        source: "https://www.courses.com.ph/senior-high-school-core-subject-pagbasa-at-pagsusuri-ng-ibat-ibang-teksto-tungo-sa-pananaliksik/"
    },
    {
        subject: "General Mathematics",
        source: "https://www.tasc.tas.gov.au/students/courses/mathematics/mtg315115/#:~:text=More%20information-,General%20Mathematics%20aims%20to%20develop%20learners%27%20understanding%20of%20concepts%20and,order%20to%20solve%20applied%20problems."
    },
    {
        subject: "General Chemistry",
        source: "https://chem.libretexts.org/Bookshelves/General_Chemistry"
    },
    {
        subject: "Pre-Calculus",
        source: "https://www.collinsdictionary.com/dictionary/english/precalculus#:~:text=precalculus%20in%20American%20English&text=1.,of%20study%20leading%20to%20calculus"
    },
    {
        subject: "Physical Education and Health",
        source: "https://chss.wwu.edu/health-human-development/about-peh#:~:text=Physical%20Education%20and%20Health%20(PEH,Effective%20Teachers%2C%20Compassionate%20People"
    },
    {
        subject: "General Physics",
        source: "https://www.metrostate.edu/academics/courses/phys-111#:~:text=General%20Physics%20is%20designed%20for,%2C%20heat%2C%20and%20wave%20motion."
    },
    {
        subject: "English For Academic and Professional Purposes",
        source: "https://www.scribd.com/document/526928146/LESSON-COVERAGE-FOR-EAPP"
    },
    {
        subject: "Reading and Writing Skills",
        source: "https://www.studocu.com/ph/document/university-of-mindanao/bs-mathematics/shs-core-reading-and-writing-cg/12597900"
    },
    {
        subject: "Inquiries, Investigations, and Immersion",
        source: "https://mathbychua.weebly.com/inquiries-investigations-and-immersion.html"
    },
    {
        subject: "Earth Science",
        source: "https://www.teacherph.com/earth-science-for-stem-quarter-1-module-1/"
    },
    {
        subject: "Understanding Culture, Society, and Politics",
        source: "https://www.courses.com.ph/senior-high-school-core-subject-understanding-culture-society-and-politics/"
    },
    {
        subject: "Contemporary Philippine Arts from the Region",
        source: "https://filipinarts.wordpress.com/2017/10/26/featured-content/"
    }
]

export default function StrandSubjectBlog() {
    return (
        <main
            className={`h-screen w-screen p-5 pb-20 overflow-scroll text-wrap`}
        >
            <PageTransition>
                <Card>
                    <div className="CardContent flex flex-col space-y-5 p-5">
                        <div
                            className="CardTitle font-bold text-4xl"
                        >
                            Sources
                        </div>

                        {
                            sources.map((source, index) => (
                                <div key={index} className="space-y-2 max-w-full">
                                    <h3 className="text-xl uppercase">{source.subject}</h3>
                                    <p className="break-words">{source.source}</p>
                                </div>
                            ))
                        }
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/stem" text="stem > sources" />
        </main>
    );
}