import { motion } from "framer-motion";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"
import { Link, useLocation } from "react-router-dom";
import hamburg from '../assets/hamburg.png'
import hamburgClose from '../assets/hamburg-close.png'

const NavBar = () => {
    const navigation = [
        { id: 0, title: "home" },
        { id: 1, title: "skills" },
        { id: 2, title: "projects" },
        { id: 3, title: "contact" },
    ]
    const [isClosed, setClosed] = useState(true)

    const location = useLocation()


    return (
        <div className="fixed z-50 [box-shadow:_0_4px_4px_rgb(0_0_0_/_40%)] bg-[#07171d] text-white">

            <nav className="fixed h-10 text-3xl [box-shadow:_0_4px_4px_rgb(0_0_0_/_40%)] bg-[#07171d] inline-flex justify-between w-full">
                <div className="text-4lg font-bold active:scale-150 hover:text-cyan-400 ease-in-out duration-300" ><a href="/">.gn</a></div >
                <div>
                    <ul className="inline-flex">
                        {navigation.map((item) => (<li className="hidden md:block 2xl:block active:scale-150 ml-2 mr-2 hover:text-cyan-400 ease-in-out duration-300">
                            {location.pathname === '/' ?

                                (<ScrollLink to={item.title} smooth
                                    duration={500}
                                >
                                    <a href="/">.{item.title}
                                    </a>
                                </ScrollLink>
                                ) :
                                (<Link to='/' state={{ section: item.title }}>{item.title}</Link>)}
                        </li>))}

                        <li className="md:hidden xl:hidden 2xl:hidden">
                            <button onClick={() => setClosed(!isClosed)}>
                                <img src={isClosed ? hamburg : hamburgClose} className="h-9 p-1 active:animate-spin"></img>
                            </button>
                        </li>
                    </ul>


                </div>
            </nav >
            {!isClosed ?

                <motion.ul initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 200 }
                    }} className="text-center bg-[#07171d] [box-shadow:_0_4px_4px_rgb(0_0_0_/_40%)] mt-10 pt-10 pb-10 w-screen text-5xl">

                    {navigation.map((item) => (<li className="active:scale-150 ml-2 mr-2 hover:text-cyan-400 ease-in-out duration-300">
                        {location.pathname === '/' ?

                            (<ScrollLink to={item.title} smooth
                                duration={500}
                                onClick={() => setClosed(!isClosed)}
                            >
                                <a href="/">.{item.title}
                                </a>
                            </ScrollLink>
                            ) :
                            (<Link to='/' state={{ section: item.title }}>{item.title}</Link>)}
                    </li>))}
                </motion.ul>
                : null}
        </div>
    );
}

export default NavBar;