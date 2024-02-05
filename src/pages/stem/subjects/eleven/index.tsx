import { PageTransition, ScrollReveal } from "@/components/animate";

import Footer from "@/components/Footer";
import Card from "@/components/Card";

const subjects: { subject: string, description: string }[] = [
    {
        subject: "PRE-CALCULUS",
        description: "Precalculus pertains to the mathematical prerequisites for the study of calculus. It is a course, or a set of courses, that includes algebra and trigonometry at a level which is designed to prepare students for the study of calculus, thus the name precalculus. Schools often distinguish between algebra and trigonometry as two separate parts of the coursework."
    },
    {
        subject: "BASIC CALCULUS",
        description: "Basic Calculus is the continuation of Pre Calculus and as such is a Major subject for STEM students. It is the study of differentiation and integration. Both concepts are based on the idea of limits and functions. Some concepts, like continuity, exponents, are the foundation of advanced calculus. Overall, calculus is a powerful and essential subject that provides the tools to understand and analyze the dynamic nature of the world around us."
    },
    {
        subject: "GENERAL MATHEMATICS",
        description: "General Mathematics aims to continue the foundational concepts learned from the previous grade levels. It may also introduce students to more advanced topics in fields such as algebra, geometry, and trigonometry. Overall it aims to deepen students' understanding of mathematical concepts and their applications in real-world scenarios."
    },
    {
        subject: "STATISTICS AND PROBABILITY",
        description: "Statistics and probability together form a field that deals with understanding uncertainty and variability in data. Statistics involves collecting, analyzing, and interpreting data, while probability provides the mathematical foundation for quantifying the likelihood of different outcomes in uncertain situations. Together, they enable informed decision-making and inference in various fields such as science, business, and everyday life."
    },
    {
        subject: "INTRODUCTION TO THE PHILOSOPHY OF THE HUMAN PERSON",
        description: "Introduction to the Philosophy of the Human Person is one of the core subjects under the senior high school curriculum. This class seeks to help understand the divine character of the human being, despite the visible traits and circumstances that influence an individual. It promotes our study of ideas, definitions, claims, and issues."
    },
    {
        subject: "21ST CENTURY LITERATURE FROM THE PHILIPPINES AND THE WORLD",
        description: `The subject "21st Century Literature from the Philippines and the World" explores many different writings from the 21st century. It helps students understand modern literature, including its themes, styles, and cultural influences. Besides looking at stories, the class also talks about important events from the 21st century, especially in the Philippines. By studying literature, students not only enjoy the creativity of writers but also learn about how literature connects with the history of the time.`
    },
    {
        subject: "PAGSULAT NG FILIPINO SA LARANGAN NG AKADEMIKO",
        description: `"Pagsulat ng Filipino sa Larangan ng Akademiko" or better known as PFLA. It tackles advanced Filipino academic writing skills. Topics may include essay writing, research paper techniques, critical analysis, and effective argumentation. Students are likely to explore more complex literary and socio-cultural themes, enhancing their language proficiency and analytical abilities.`
    },
    {
        subject: "PERSONAL RESEARCH",
        description: "The main goal of practical research is to enhance the  critical thinking and problem-solving abilities of students through the submission of qualitative research projects. It involves students on an engaging research journey that begins with identifying the problem, reviewing the literature, selecting the participants, collecting data, analyzing the data, and reporting the results."
    },
    {
        subject: "READING AND WRITING SKILLS",
        description: "In Senior High School, Reading and Writing teaches students how to read, understand, and write effectively. They study various texts to improve reading skills and practice writing essays and creative pieces to enhance communication abilities. Grammar and language mechanics are also emphasized for proper writing."
    },
    {
        subject: "GENERAL BIOLOGY 1",
        description: "The goal of this subject is to improve knowledge of the fundamental ideas and theories of biology, especially as they relate to cellular and molecular processes in life. It also discusses how organisms change their energy. A broad overview of current biology is given in General Biology 1, emphasizing the role that chemistry and physics play in biological systems. This subject covers a lot of ground on fundamental ideas and concepts that are essential to comprehending the role that energy and molecules play in cellular functions."
    },
    {
        subject: "GENERAL BIOLOGY 2",
        description: "General biology 2 is usually just the continuation of General Biology 1 and is Major subject for STEM students. It hones the foundational concepts introduced in General Biology 1 and explores more complex and advanced topics in biology."
    },
    {
        subject: "EMPOWERING TECHNOLOGIES",
        description: "Empowerment Technologies, often abbreviated as EmpTech, is the  subject that equips students with digital literacy and skills essential for navigating the technological landscape. It covers a range of topics, including information and communication technology,  considerations in the digital world, and the use of technology for personal and professional development. EmpTech aims to empower students with the knowledge and skills needed to succeed in today's technology-driven society."
    },
    {
        subject: "UNDERSTANDING CULTURE, SOCIETY, AND POLITICS",
        description: "The UCSP subject, Understanding Culture, Society, and Politics, helps us learn about our world. It explores and observes social, political, and cultural behaviors and phenomena. This includes different cultures, interactions among people, and how governments work. By studying these things, we gain insights into our surroundings, the behaviors of individuals and communities, and we become more aware of the world around us. It encourages us to think critically and understand global issues, making us better equipped to engage with and solve the complexities of our cultural, social, and political environments."
    },
    {
        subject: "EARTH SCIENCE",
        description: "Earth Science is a core subject for all Senior High School students that tackles the origins of Earth, Solar System, and the Universe.  It also prepares students for a comprehensive understanding of the Earth systems and processes. Allows students to foster scientific literacy, environmental awareness, and an appreciation of the natural world."
    },
    {
        subject: "ORAL COMMUNICATION WITH CONTEXT",
        description: "Oral Communication with Context or OCC typically covers the development of effective spoken communication skills. Students may learn about various forms of oral communication, including public speaking, interpersonal communication, and group discussions. The curriculum often emphasizes proper articulation, vocal variety, body language, and effective use of visual aids. Investigating communication within different settings, such as professional, social, or academic, are key aspects of the subject."
    },
    {
        subject: "KOMMUNIKASYON AT PANANALIKSIK SA WIKA AT KULTURANG PILIPINO",
        description: `The Senior High School course "Kommunikasyon at Pananaliksik sa Wika at Kulturang Pilipino," or KPWKP, seeks to develop students' research and communication abilities while strengthening their understanding of linguistic principles and their sense of cultural belonging as Filipinos.`
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
                        <ScrollReveal className="space-y-5">
                            <div
                                className="CardTitle font-bold text-5xl"
                            >
                                Grade 11 Subjects
                            </div>

                            {
                                subjects.map(subject => (
                                    <div className="space-y-2">
                                        <h3 className="text-3xl">{subject.subject}</h3>
                                        <p>{subject.description}</p>
                                    </div>
                                ))
                            }
                        </ScrollReveal>
                    </div>
                </Card>
            </PageTransition>
            <Footer href="/stem/subjects" text="stem > subjects > eleven" />
        </main>
    );
}