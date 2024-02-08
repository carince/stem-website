import { PageTransition, ScrollReveal } from "@/components/animate";

import Footer from "@/components/Footer";
import Card from "@/components/Card";

const subjects: { name: string, description: string }[] = [
    {
        name: "Contemporary Philippine Arts from the Region",
        description: "Contemporary Philippine Arts from the Region is a subject that emphasizes the importance of art in our lives, from historical times to the present. It raises awareness of how art has changed over time and become a vital component of our everyday lives. The goal of the course is to develop an appreciation and understanding of different styles of artistic expression, such as literature, visual arts, and performances. It goes beyond mere aesthetics to stress the importance of art as a tool for self-discovery and knowledge acquisition."
    },
    {
        name: "General Chemistry",
        description: "In General Chemistry, students study the fundamental principles and concepts of chemistry. Topics typically include atomic structure, chemical bonding, stoichiometry, thermodynamics, kinetics, equilibrium, acids and bases, and chemical reactions. Laboratory work is often an integral part of the course, allowing students to apply theoretical knowledge through hands-on experiments and observations. The subject aims to provide a solid foundation in chemistry principles, preparing students for more advanced studies in the field and equipping them with essential analytical and problem-solving skills.        "
    },
    {
        name: "Personal Development",
        description: "The senior high school curriculum includes personal development as one of its primary subjects. This subject develops self-awareness, emotional intelligence, and connections with other people.  This also emphasizes developing new abilities for self-improvement.        "
    },
    {
        name: "Physical Education and Health",
        description: "Physical Education is an education which brings improvement in human performance with the help of physical activities. Physical activities range from simple walking to jogging, running, sprinting, hopping, jumping, climbing, throwing, pushing, pulling, kicking, etc. Education without physical activities is like body without soul. Physical education teaches how to acquire ability to develop strength, speed, endurance and coordination abilities. It also emphasises on achieving social qualities, such as, empathy, cooperation, friendliness, team spirit, and respect for rules, which are essential for healthy social relations with others."
    },
    {
        name: "English for Academic Purposes",
        description: "The subject English for Academic Purposes (EAPP)  includes advanced reading, writing, listening, and speaking skills for academic contexts. This may involve academic vocabulary building, critical thinking, essay writing, research skills, and oral presentations. Additionally, grammar and language mechanics are often integrated to support overall language proficiency.         "
    },
    {
        name: "General Physics",
        description: "General Physics is designed for students interested in science and technology related careers and majors. It is taught at the algebra/trigonometry level and it incorporates conceptual understanding, laboratory work, and mathematical problem solving. General Physics I covers motion, heat, and wave motion. Topics covered include kinematics, statics, dynamics, momentum, energy, rotation, gravitation and planetary motion, fluids, kinetic theory of gases, and thermodynamics.        "
    },
    {
        name: "Human Biology",
        description: "Human Biology is the study of everything related to the human body, including anthropology, development, anatomy and physiology, genetics, ecology, and nutrition. In short, the study focuses on how we got here, how we function, and the role we play in the natural world. This helps us to better understand human health, because we can learn how to stay healthy and how diseases and injuries can be treated.        "
    },
    {
        name: "Media and Information Literacy",
        description: "Human Biology is the study of everything related to the human body, including anthropology, development, anatomy and physiology, genetics, ecology, and nutrition. In short, the study focuses on how we got here, how we function, and the role we play in the natural world. This helps us to better understand human health, because we can learn how to stay healthy and how diseases and injuries can be treated.        "
    },
    {
        name: "Inquiries, Investigation, and Immersion",
        description: "What is III or Inquiries, Investigation, and Immersion? This subject is about doing research and experiencing the research itself. This track also tests your critical thinking skills and may improve along the way. The subject’s objective is to use your understanding of the research to ensure how it works so that the experience you will encounter during your research will be fulfilling."
    },
    {
        name: "Pananaliksik Pagbabasa at Pagsusuri ng Iba’t Ibang Teksto Tungo sa Pananaliksik",
        description: "Pananaliksik Pagbabasa at Pagsusuri ng Iba’t Ibang Teksto Tungo sa Pananaliksik or PPITTP is one of the minor subjects in STEM during the first semester of senior high school. In this subject they will tackle the different types of texts, reading and  analyzing different texts, and writing research."
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
                                        <h3 className="text-3xl uppercase">{subject.name}</h3>
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