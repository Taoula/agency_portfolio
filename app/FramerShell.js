import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function FramerShell({ children, direction, delay, duration, size, setDone }) {
    if (!size) size = 35

    const slideIn = {
        hidden: () => ({
            opacity: 0,
            y: direction == "up" ? size : direction == "down" ? (size * -1) : 0,
            x: direction == "right" ? (size * -1) : direction == "left" ? size : 0
        }),
        visible: () => ({
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: duration || 1,
                delay: delay || 0.2,
                onComplete: () => setDone && setDone(true)
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

