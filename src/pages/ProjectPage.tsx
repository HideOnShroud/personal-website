import Carousel from "../components/Carousel";
import Screenshots from "../components/Screenshots";
import projectList from "../data/projectList";
import { useParams } from "react-router-dom";


const ProjectPage = () => {
    const { title } = useParams()
    const filteredProject = projectList.find((project) => project.title === title)

    return (

        <div className="pt-20">
            <div className="text-center w-full">
                <h1 className="text-white text-6xl">{filteredProject?.title}</h1>
                <h1 className="text-white text-4xl pt-10">{filteredProject?.desc}</h1>
                <div className="m-auto pt-5 overflow-hidden">
                    <Carousel thing={filteredProject?.screenshots?.map((item: any) => (<Screenshots image={item} />))} />
                </div>
            </div>

        </div>

    );
}

export default ProjectPage;