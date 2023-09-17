import skillList from "./skillList";
import frameWorks from "./frameWorks";
import gameSpotter from "../assets/projects/game-spotter.png"
import quizzer from "../assets/projects/quizzer.png"
import autoThemer from "../assets/projects/autothemer.png"
import bannaSpa from "../assets/projects/banna-spa.png"

import gameSpotter1 from "../assets/projects/gamespotter/screenshot-1.png"
import gameSpotter2 from "../assets/projects/gamespotter/screenshot-2.png"
import gameSpotter3 from "../assets/projects/gamespotter/screenshot-3.png"

import bannaAbout from "../assets/projects/bannaSpa/about.png"
import mobileHome from "../assets/projects/bannaSpa/mobileHome.png"
import mobileAbout from "../assets/projects/bannaSpa/mobileAbout.png"


const projectList = [
    {
        title: "Banna Thai Massage", icon: bannaSpa,
        desc: `Website for Banna Spa`,
        link: "https://bannaspa.ge/",
        screenshots: [bannaAbout, mobileHome, mobileAbout],
        used: [skillList[10].icon, skillList[11].icon, skillList[2].icon, frameWorks[0].icon, frameWorks[1].icon,]
    },
    {
        title: "Game-Spotter", icon: gameSpotter,
        desc: `Video Game Catalogue Using Rawg Api`,
        link: "https://game-spotter.vercel.app/",
        screenshots: [gameSpotter, gameSpotter1, gameSpotter2, gameSpotter3],
        github: "https://github.com/HideOnShroud/game-spotter",
        used: [skillList[10].icon, skillList[11].icon, skillList[2].icon, frameWorks[0].icon, frameWorks[1].icon,]
    },
    {
        title: "Quizzer", icon: quizzer,
        desc: `Quiz App with Auth and Admin Panel`,
        github: "https://github.com/HideOnShroud/quiz-app-final",
        used: [skillList[10].icon, skillList[11].icon, skillList[1].icon, skillList[4].icon, skillList[7].icon, skillList[9].icon, frameWorks[1].icon, frameWorks[2].icon, frameWorks[5].icon]
    },
    {
        title: "AutoThemer", icon: autoThemer,
        desc: `Dark and Light mode switcher for windows with rainmeter support.`,
        github: "https://github.com/HideOnShroud/Auto-Themer",
        used: [skillList[0].icon]
    }
]

export default projectList