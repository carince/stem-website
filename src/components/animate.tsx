import { motion } from "framer-motion";
import { ScriptProps } from "next/script";
import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { Children } from "react"

function PageTransition({ children, className }: ScriptProps) {
    return (
        <motion.div
            className={className ? className : ""}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -500, opacity: 0 }}
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

function ScrollReveal({ children, className }: ScriptProps) {
    return (
        <div className={`ScrollReveal-Parent ${className ? className : ""}`}>
            {/* {
                Children.map(children, child => {
                    //@ts-ignore
                    const ref = useRef(null);
                    //@ts-ignore
                    const isInView = useInView(ref, { once: true });
                    //@ts-ignore
                    const controls = useAnimation();
                    //@ts-ignore
                    useEffect(() => {
                        if (isInView) {
                            controls.start("visible")
                        }
                    }, [isInView, controls])

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
            } */}
        </div>
    )
};

export { PageTransition, ScrollReveal };