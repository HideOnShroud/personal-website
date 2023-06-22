import { useState } from "react";
import { Link } from "react-scroll"

const NavBar = () => {
    const navigation = [
        { id: 0, title: "home" },
        { id: 1, title: "skills" },
        { id: 2, title: "projects" },
        { id: 3, title: "contact" },
    ]

    const [isClosed, setClosed] = useState(true)

    return (
        <div className="fixed z-50 [box-shadow:_0_4px_4px_rgb(0_0_0_/_40%)] bg-[#07171d] text-white">

            <nav className="fixed h-10 text-3xl [box-shadow:_0_4px_4px_rgb(0_0_0_/_40%)] bg-[#07171d] inline-flex justify-between w-full">
                <div className="text-4lg font-bold active:scale-150 hover:text-cyan-400 ease-in-out duration-300" >.gn</div >
                <div>
                    <ul className="inline-flex">
                        {navigation.map((item) => (<li className="hidden md:block 2xl:block active:scale-150 ml-2 mr-2 hover:text-cyan-400 ease-in-out duration-300"><Link to={item.title} smooth
                            duration={500}><a href={item.title}>.{item.title}</a></Link></li>))}
                        {/* <li className="active:scale-150 ml-2 mr-2 hover:text-cyan-400 ease-in-out duration-300"><Link to="home" smooth
                        duration={500}><a href='/'>.home</a></Link></li>
                        <li className="active:scale-150 ml-2 mr-2 hover:text-cyan-400 ease-in-out duration-300"><Link to="skills" smooth
                        duration={500}><a href="">.skills</a></Link></li>
                        <li className="active:scale-150 ml-2 mr-2 hover:text-cyan-400 ease-in-out duration-300"><Link to="projects" smooth
                        duration={500}><a href="">.projects</a></Link></li>
                        <li className="active:scale-150 ml-2 mr-2 hover:text-cyan-400 ease-in-out duration-300"><Link to="contact" smooth
                    duration={500}><a href="">.contact</a></Link></li> */}

                        <li className="md:hidden xl:hidden 2xl:hidden"><button onClick={() => setClosed(!isClosed)}><img src="src\assets\humburg.png" className="h-10"></img></button></li>
                    </ul>


                </div>
            </nav >
            {!isClosed ?
                <ul className="text-center bg-[#07171d] [box-shadow:_0_4px_4px_rgb(0_0_0_/_40%)] mt-10 pt-10 pb-10 w-screen text-5xl">

                    {navigation.map((item) => (<li className="active:scale-150 ml-2 mr-2 hover:text-cyan-400 ease-in-out duration-300"><Link to={item.title} smooth
                        duration={500}><a href={item.title}>.{item.title}</a></Link></li>))}
                </ul>
                : null}
        </div>
    );
}

export default NavBar;