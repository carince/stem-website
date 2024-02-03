import Link from "next/link";
import { Inter } from "next/font/google";
import { PageTransition, anim, RevealUpwards } from "../../components/animate";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <PageTransition>
            <main
                className={`w-screen h-screen flex flex-col items-center space-y-12 p-5 pb-20 ${inter.className} overflow-scroll`}
            >
                <motion.div
                    className="font-bold text-5xl"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <p>Science, Technology, Engineering, Mathematics</p>
                </motion.div>

                <div className="mb-32 flex flex-col space-y-5 text-center">
                    <motion.div
                        className="group rounded-lg border px-5 py-4 border-[rgb(75,101,62)] bg-[rgba(75,101,62,0.3)]"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                        }}
                    >
                        <Link
                            href="/stem/about"
                        >
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                {"About STEM "}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    ?
                                </span>
                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                What is STEM exactly? 🤔😱
                            </p>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="group rounded-lg border px-5 py-4 border-[rgb(75,101,62)] bg-[rgba(75,101,62,0.3)]"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.25,
                        }}
                    >
                        <Link
                            href="/stem/video"
                        >
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                {"Campaign Video "}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                </svg>

                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                Watch our strand campaign video!
                            </p>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="group rounded-lg border px-5 py-4 border-[rgb(75,101,62)] bg-[rgba(75,101,62,0.3)]"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                        }}
                    >
                        <Link
                            href="/stem/subjects"
                        >
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                {"Subjects "}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                The STEM subjects for Grade 11 and Grade 12!
                            </p>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="group rounded-lg border px-5 py-4 border-[rgb(75,101,62)] bg-[rgba(75,101,62,0.3)]"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.35,
                        }}
                    >
                        <Link
                            href="/stem/sources"
                        >
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                {"Sources "}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>

                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                Sources we used to create the app!
                            </p>
                        </Link>
                    </motion.div>
                </div>

                <footer
                    className="absolute bottom-0 w-full flex flex-row items-center justify-between py-2 px-5 bg-[#0d100c] border-[#34462b] border-t"
                >
                    <motion.h1
                        className="pl-1 font-mono"
                        {...anim(RevealUpwards)}
                    >
                        {"home > stem"}
                    </motion.h1>
                    <motion.div
                        className="flex justify-center items-center border rounded-full w-10 aspect-square border-[rgb(75,101,62)] text-[rgb(150,181,135)] bg-[rgba(75,101,62,0.3)]"
                        {...anim(RevealUpwards)}
                    >
                        <Link href="/">
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
