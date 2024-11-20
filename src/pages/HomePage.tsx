import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useEffect } from "react";
import { Element } from "react-scroll";
import Certifiactes from "../components/Certificates";

const HomePage = () => {
    const location = useLocation()
    useEffect(() => {
        const section = location.state?.section
        if (section) {
            const element = document.getElementById(section);
            // 👇 Will scroll smoothly to the top of the next section
            if (element) {

                element.scrollIntoView({ behavior: 'smooth' });
                window.history.replaceState({}, 'home')


            }
        }

    }, [location])
    return (
        <div className="text-white h-screen w-screen">
            <Element name="home">

                <Home />
            </Element>
            <Element name="skills">

                <Skills />
            </Element>
            <Element name="projects">

                <Projects />
            </Element>
            <Element name="certificates">
                <Certifiactes />
            </Element>

            <Element name="contact">

                <Contact />
            </Element>
        </div >
    );
}

export default HomePage;
