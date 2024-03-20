import resume from "../assets/Guga-Natroshvili-Resume.pdf"

const Contact = () => {
    return (
        <div className="grid place-items-center pt-10">
            <h1 className="text-6xl ">Contact</h1>
            <div id="contact" className="bg-[#07171d] w-[100vw] h-[75vh] mb-28 md:w-[70vw] [box-shadow:_0_10px_10px_rgb(0_0_0_/_80%)] rounded-[5vh] mt-5 grid place-items-center overflow-hidden" >
                <div className="text-2xl md:text-4xl lg:text-5xl text-center">
                    <h1 className="mb-8">Guga Natroshvili</h1>
                    <h1 className="mb-8">Email: <p onClick={() => { navigator.clipboard.writeText("guga.natroshvili.1@btu.edu.ge") }}>guga.natroshvili.1@btu.edu.ge</p>
                    </h1>
                    <h1 className="mb-8">Phone: <a href="tel:+995598631633">+995 598 631 633</a>
                    </h1>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <button className="mt-2 rounded-xl bg-[#016973] pr-5 pt-1 pl-5 pb-1">Resume</button>

                    </a>

                </div>
                {/* add form after exam */}
                {/* <form action="" method="post" className="w-10/12 grid place-items-center text-4xl">
                    <label htmlFor="" className="pb-2">Name</label>
                    <input type="text" className="pl-5 pr-5 rounded-[4vh] border-2 border-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-cyan-400  bg-testBg  w-10/12" />
                    <label htmlFor="" className="pt-5 pb-2">Email</label>
                    <input type="text" className="pl-5 pr-5 rounded-[4vh] border-2 border-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-cyan-400  bg-testBg  w-10/12" />
                    <label htmlFor="" className="pt-5 pb-2">Message</label>
                    <textarea rows={6} className="rounded-[4vh] border-2 border-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 overflow-hidden resize-none p-5 bg-testBg  w-10/12" />
                    <button className="mt-2 rounded-[2vh] bg-testBg border-2 border-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-cyan-400  pr-2 pl-2">Submit</button>
                </form> */}
            </div>
        </div>
    );
}

export default Contact;