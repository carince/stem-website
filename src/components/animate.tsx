import { motion } from "framer-motion";
import { ScriptProps } from "next/script";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

const anim = (variants: any) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

const RevealUpwards = {
    initial: { y: 75, opacity: 0 },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.25,
            duration: 0.25
        }
    }
}

function PageTransition({ children }: ScriptProps) {
    return (
        <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 30
            }}
        >
            {children}
        </motion.div>
    )
};

function ScrollReveal({ children }: ScriptProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { y: 75, opacity: 0 },
                visible: { y: 0, opacity: 1 }
            }}
            initial="hidden"
            animate={controls}
            transition={{
                duration: 0.5,
                delay: 0.25
            }}
        >
            {children}
        </motion.div>
    )
};

export { PageTransition, ScrollReveal, anim, RevealUpwards };