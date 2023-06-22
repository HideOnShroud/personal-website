import SkillComponent from "./SkillComponent";

const Skills = () => {
    const skillList = [
        { title: "Python", icon: "src/assets/python.png" },
        { title: "Javascript", icon: "src/assets/JavaScript-logo.png" },
        { title: "Typescript", icon: "src/assets/Typescript_logo_2020.svg.png" },
        { title: "Java", icon: "src/assets/java.png" },
        { title: "Php", icon: "src/assets/php.png" },
        { title: "Kotlin", icon: "src/assets/Kotlin_Icon.svg.png" },
        { title: "C++", icon: "src/assets/ISO_C++_Logo.svg.png" },
        { title: "SQL", icon: "src/assets/sql-server-icon-png-29.png" },
        { title: "HTML", icon: "src/assets/html-1.svg" },
        { title: "CSS", icon: "src/assets/CSS3_logo.svg.png" },
    ]

    const frameWorks = [
        { title: 'React', icon: "src/assets/react.svg" },
        { title: 'Tailwind', icon: "src/assets/tailwind.png" },
        { title: 'Bootstrap', icon: "src/assets/bootstrap.png" },
        { title: 'Chakra UI', icon: "src/assets/chakraui.png" },
        { title: 'Material UI', icon: "src/assets/mui.png" },
        { title: 'Laravel', icon: "src/assets/laravel.png" },
        { title: 'Android Studio', icon: "src/assets/android.png" },
        { title: 'Django', icon: "src/assets/django.svg" },
    ]
    const operatingSystems = [

        { title: 'Windows', icon: "src/assets/windows.png" },
        { title: 'Linux', icon: "src/assets/linux.png" },
        { title: 'Mac', icon: "src/assets/mac.png" },
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