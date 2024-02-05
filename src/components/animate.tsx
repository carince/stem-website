import { motion } from "framer-motion";
import { ScriptProps } from "next/script";
import { JSXElementConstructor, ReactElement, ReactNode, useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { Children } from "react"

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

function PageTransition({ children, className }: ScriptProps) {
    return (
        <motion.div
            className={className ? className : ""}
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

function BlogPageTransition({ children, className }: ScriptProps) {
    return (
        <motion.div
            className={className ? className : ""}
            initial={{ x: 0, opacity: 1 }}
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
}

function ScrollReveal({ children, className }: ScriptProps) {
    return (
        <div className={`ScrollReveal-Parent ${className ? className : ""}`}>
            {
                Children.map(children, child => {
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
                            {child}
                        </motion.div>
                    )
                })
            }
        </div>
    )
};

export { PageTransition, BlogPageTransition, ScrollReveal, anim, RevealUpwards };