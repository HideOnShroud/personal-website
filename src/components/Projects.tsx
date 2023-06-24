import ProjectComponent from "./ProjectComponent";
import projectList from "../data/projectList";
const Projects = () => {

    return (
        <div id="projects" className="m-auto pt-10">
            <h1 className="text-6xl text-center mt-10 mb-10">Projects</h1>
            <div className="pt-10 pb-10 grid place-items-center w-[130vw] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-content-center">
                {projectList.map((item: any) => (<ProjectComponent project={item} />))}
                {projectList.map((item: any) => (<ProjectComponent project={item} />))}
                {projectList.map((item: any) => (<ProjectComponent project={item} />))}
            </div>




        </div>
    );
}

export default Projects;