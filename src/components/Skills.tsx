import SkillComponent from "./SkillComponent";

const Skills = () => {
    const skillList = [
        { title: "Python", icon: "src/assets/python.png" },
        { title: "Javascript", icon: "./JavaScript-logo.png" },
        { title: "Typescript", icon: "./Typescript_logo_2020.svg.png" },
        { title: "Java", icon: "./java.png" },
        { title: "Php", icon: "./php.png" },
        { title: "Kotlin", icon: "./Kotlin_Icon.svg.png" },
        { title: "C++", icon: "./ISO_C++_Logo.svg.png" },
        { title: "SQL", icon: "./sql-server-icon-png-29.png" },
        { title: "HTML", icon: "./html-1.svg" },
        { title: "CSS", icon: "./CSS3_logo.svg.png" },
    ]

    const frameWorks = [
        { title: 'React', icon: "./react.svg" },
        { title: 'Tailwind', icon: "./tailwind.png" },
        { title: 'Bootstrap', icon: "./bootstrap.png" },
        { title: 'Chakra UI', icon: "./chakraui.png" },
        { title: 'Material UI', icon: "./mui.png" },
        { title: 'Laravel', icon: "./laravel.png" },
        { title: 'Android Studio', icon: "./android.png" },
        { title: 'Django', icon: "./django.svg" },
    ]
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