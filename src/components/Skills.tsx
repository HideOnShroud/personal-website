import skillList from "../data/skillList";
import frameWorks from "../data/frameWorks";
import SkillComponent from "./SkillComponent";

const Skills = () => {

    const operatingSystems = [

        { title: 'Windows', icon: "./windows.png" },
        { title: 'Linux', icon: "./linux.png" },
        { title: 'Mac', icon: "./mac.png" },
    ]
    return (
        <div id="skills" className="m-auto pt-10">
            <h1 className="text-6xl text-center mt-10 mb-10">Skills</h1>
            <div className="pt-10 pb-10 grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 place-content-center">
                {skillList.map((item) => (<SkillComponent skill={item} />))}
            </div>
            <h1 className="text-6xl text-center mt-10 mb-10">Frameworks and Libraries</h1>
            <div className="pt-10 pb-10 grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10">
                {frameWorks.map((item) => (<SkillComponent skill={item} />))}
            </div>
            <h1 className="text-6xl text-center mt-10 mb-10">Operating Systems</h1>
            <div className="pt-10 pb-10 grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10">
                {operatingSystems.map((item) => (<SkillComponent skill={item} />))}
            </div>



        </div>
    );
}

export default Skills;