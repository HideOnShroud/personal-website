import projectList from "../data/projectList";
import { useParams } from "react-router-dom";


const ProjectPage = () => {
    const { title } = useParams()
    const filteredProject = projectList.find((project) => project.title === title)

    return (
        <div className="pt-20">
            <img src={"." + filteredProject?.icon} alt="image" className="rounded" />
            <h1 className="text-white text-6xl">{filteredProject?.title}</h1>
        </div>
    );
}

export default ProjectPage;