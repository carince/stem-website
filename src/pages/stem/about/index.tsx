import Link from "next/link";
import { Inter } from "next/font/google";
import { PageTransition, anim, RevealUpwards, ScrollReveal } from "../../../components/animate";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <PageTransition>
            <main
                className={`w-screen h-screen flex flex-col items-center justify-between p-5 pt-24 ${inter.className}`}
            >
                <div className="text-lg font-light space-y-5">
                    <ScrollReveal>
                        <h1 className="font-semibold text-5xl">Science, <br />Technology, <br />Engineering, <br />Mathematics</h1>
                    </ScrollReveal>
                    <ScrollReveal>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi. Elit duis tristique sollicitudin nibh sit. Leo urna molestie at elementum. Elementum integer enim neque volutpat ac tincidunt vitae. Nulla facilisi nullam vehicula ipsum a arcu. Faucibus a pellentesque sit amet. Sed odio morbi quis commodo. Morbi leo urna molestie at elementum eu facilisis sed. Quisque non tellus orci ac auctor augue mauris augue. <br />
                        </p>
                    </ScrollReveal>
                </div>

                <footer
                    className="absolute bottom-0 w-full flex flex-row items-center justify-between py-2 px-5 bg-[#0d100c] border-[#34462b] border-t"
                >
                    <motion.h1
                        className="pl-1 font-mono"
                        {...anim(RevealUpwards)}
                    >
                        {"home > stem > about"}
                    </motion.h1>
                    <motion.div
                        className="flex justify-center items-center border rounded-full w-10 aspect-square border-[rgb(75,101,62)] text-[rgb(150,181,135)] bg-[rgba(75,101,62,0.3)]"
                        {...anim(RevealUpwards)}
                    >
                        <Link href="/stem">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </Link>
                    </motion.div>
                </footer>
            </main>
        </PageTransition>
    );
}
