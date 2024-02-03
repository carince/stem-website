import Link from "next/link";
import { Inter } from "next/font/google";
import { PageTransition } from "./animate";
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageTransition>
      <main
        className={`w-screen h-screen flex flex-col items-center justify-center space-y-12 ${inter.className}`}
      >
        <motion.div
          className="font-bold text-5xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
          }}
        >
          <p>Welcome to</p>
          <p>STEM!</p>
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
              href="/stem"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {"About STEM "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about the STEM strand and its subjects.
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
              href="/quiz"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {"Assessment "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Test your knowledge!
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
              href="/about"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {"About the App "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Additional info regarding this application.
              </p>
            </Link>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
