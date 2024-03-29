import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {
    skill: MySkills
}

interface MySkills {
    title: string
    icon: string
}


const SkillComponent = ({ skill }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.set("hidden")
        }
    }, [isInView])
    return (
        <motion.div ref={ref} variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 }
        }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="bg-[#07171d] md:w-80 md:h-80 w-24 h-24 [box-shadow:_0_10px_10px_rgb(0_0_0_/_80%)] rounded-[10%] grid place-items-center overflow-hidden" >
            <img src={skill.icon} alt="" className="md:w-40 md:h-40 w-14 h-14 rounded pointer-events-none object-contain" />
            <h1 className="text-white text-xl md:text-4xl">{skill.title}</h1>
        </motion.div >
    );
}

export default SkillComponent;