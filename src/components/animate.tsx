import { motion } from "framer-motion";
import { ScriptProps } from "next/script";

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

export { PageTransition };