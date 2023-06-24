import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
    return (
        <div className="text-white h-screen w-screen">

            <Home />
            <Skills />
            <Projects />
            <Contact />
        </div >
    );
}

export default HomePage;