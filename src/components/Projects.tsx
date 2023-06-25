import ProjectComponent from "./ProjectComponent";
import projectList from "../data/projectList";
import Carousel from "./Carousel";
const Projects = () => {
    return (
        <div id="projects" className="m-auto pt-5 overflow-hidden">
            <h1 className="text-6xl text-center mt-10 mb-10">Projects</h1>
            <Carousel thing={projectList.map((item: any) => (<ProjectComponent project={item} />))} />




        </div >
    );
}

export default Projects;