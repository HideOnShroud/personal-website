import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {
    project: MyProjects
}

interface MyProjects {
    title: string
    icon: string
    desc: string
    link: string
    used: string[]
}


const ProjectComponent = ({ project }: Props) => {
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
            className="bg-[#07171d] w-[40vw] h-[70vh] [box-shadow:_0_10px_10px_rgb(0_0_0_/_80%)] rounded-[10%] grid place-items-center overflow-hidden" >
            <img src={project.icon} alt="" className="rounded" />
            <h1 className="text-white text-4xl">{project.title}</h1>
            <h1>{project.desc}</h1>
            <div className='grid place-items-center grid-cols-5 gap-2'>
                {project.used.map((item: any) => <button className='pl-5 pr-5 pt-2 pb-2 rounded-xl bg-[#001220]'><img src={item} alt="" className='h-[4vh]' /></button>)}
            </div>
            <div className='inline-flex w-full pl-8 pr-8 justify-between'>

                <button className='pl-5 pr-5 pt-2 pb-2 rounded-xl bg-[#001220]'><a href={project.link} target="_blank">Demo</a></button>
                <button className='pl-5 pr-5 pt-2 pb-2 rounded-xl bg-[#001220]'>Read More</button>
            </div>
        </motion.div >
    );
}
export default ProjectComponent;