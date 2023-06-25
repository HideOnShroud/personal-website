import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
    thing: any
}

const Carousel = ({ thing }: Props) => {
    const [width, setWidth] = useState(0)
    const slider = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (slider.current) {
            setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
        }
    }, [width])
    return (
        <motion.div ref={slider} whileTap={{ cursor: 'grabbing' }}>

            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="pt-10 pb-10 inline-flex w-autp gap-10">
                {thing}
            </motion.div>
        </motion.div>
    );
}

export default Carousel;