import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const FadeInWhenVisible: React.FC<Props> = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWhenVisible;
