import skillList from "./skillList";
import frameWorks from "./frameWorks";
import gameSpotter from "../assets/projects/game-spotter.png"
import quizzer from "../assets/projects/quizzer.png"
import autoThemer from "../assets/projects/autothemer.png"


const projectList = [
    {
        title: "Game-Spotter", icon: gameSpotter,
        desc: `Video Game Catalogue Using Rawg Api`,
        link: "https://game-spotter.vercel.app/",
        github: "https://github.com/HideOnShroud/game-spotter",
        used: [skillList[10].icon, skillList[11].icon, skillList[2].icon, frameWorks[0].icon, frameWorks[1].icon,]
    },
    {
        title: "Quizzer", icon: quizzer,
        desc: `Quiz App with Auth and Admin Panel`,
        screenshots: [quizzer, quizzer, quizzer],
        link: "/project/Quizzer",
        github: "https://github.com/HideOnShroud/quiz-app-final",
        used: [skillList[10].icon, skillList[11].icon, skillList[1].icon, skillList[4].icon, skillList[7].icon, skillList[9].icon, frameWorks[1].icon, frameWorks[2].icon, frameWorks[5].icon]
    },
    {
        title: "AutoThemer", icon: autoThemer,
        desc: `Dark and Light mode switcher for windows with rainmeter support.`,
        link: "https://github.com/HideOnShroud/Auto-Themer",
        github: "https://github.com/HideOnShroud/Auto-Themer",
        used: [skillList[0].icon]
    }
]

export default projectList