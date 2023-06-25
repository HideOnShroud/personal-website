import { Link } from 'react-router-dom'

interface Props {
    project: MyProjects
}

export interface MyProjects {
    title: string
    icon: string
    desc: string
    link: string
    github: string
    used: string[]
}


const ProjectComponent = ({ project }: Props) => {

    return (

        <div
            className="bg-[#07171d] w-[80vw] xl:w-[40vw] h-[70vh] xl:h-[70vh] hover:scale-110 ease-in-out duration-300 [box-shadow:_0_10px_10px_rgb(0_0_0_/_80%)] rounded-[10%] grid place-items-center overflow-hidden" >
            <img src={project.icon} alt="" className="rounded" />
            <h1 className="text-white text-4xl">{project.title}</h1>
            <h1 className='text-2xl'>{project.desc}</h1>
            <div className='flex flex-wrap justify-center gap-2'>
                {project.used.map((item: any) => <button className='pl-5 pr-5 pt-2 pb-2 rounded-xl bg-[#001220]'><img src={item} alt="" className='h-[3vh]' /></button>)}
            </div>
            <div className='inline-flex w-full pl-8 pr-8 justify-between'>

                <button className='pl-5 pr-5 pt-2 pb-2 rounded-xl bg-[#001220]'><a href={project.link} target="_blank">Demo</a></button>
                <button className='pl-5 pr-5 pt-2 pb-2 rounded-xl bg-[#001220]'><a href={project.github} target="_blank">GitHub</a></button>
                <button className='pl-5 pr-5 pt-2 pb-2 rounded-xl bg-[#001220]'><Link to={`/project/${project.title}`} >Info</Link></button>
            </div>
        </div >
    );
}
export default ProjectComponent;