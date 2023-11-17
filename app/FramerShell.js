import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FramerShell({ children, direction }) {

    const slideIn = {
        hidden: () => ({
            opacity: 0,
            y: direction == "up" ? 25 : direction == "down" ? -25 : 0,
            x: direction == "right" ? -35 : direction == "left" ? 35 : 0
        }),
        visible: () => ({
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.2
            }
        })
    }

    const ref = useRef(null);
    const inView = useInView(ref, { once: false })

    return (
        <motion.div ref={ref} variants={slideIn} initial="hidden" animate={inView ? "visible" : "hidden"}>
            {children}
        </motion.div>
    )
}