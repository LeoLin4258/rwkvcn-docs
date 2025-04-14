"use client"
import { motion } from "framer-motion";

export const MotionContainerWrapper = ({ children, cn }: { children: React.ReactNode, cn?: string }) => {
    return (
        <motion.div
            className={`w-full flex flex-col items-center justify-center container-wrapper ${cn}`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
};

