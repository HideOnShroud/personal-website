import ProjectComponent from "./ProjectComponent";
import projectList from "../data/projectList";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
const Projects = () => {
    const [width, setWidth] = useState(0)
    const slider = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (slider.current) {
            setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
        }
    }, [width])
    return (
        <div id="projects" className="m-auto pt-5 overflow-hidden">
            <h1 className="text-6xl text-center mt-10 mb-10">Projects</h1>
            <motion.div ref={slider} whileTap={{ cursor: 'grabbing' }}>

                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="pt-10 pb-10 inline-flex w-autp gap-10">
                    {projectList.map((item: any) => (<ProjectComponent project={item} />))}
                    {projectList.map((item: any) => (<ProjectComponent project={item} />))}

                </motion.div>
            </motion.div>




        </div >
    );
}

export default Projects;