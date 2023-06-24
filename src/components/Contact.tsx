const Contact = () => {
    return (
        <div className="grid place-items-center pt-10">
            <h1 className="text-6xl ">Contact</h1>
            <div id="contact" className="bg-[#07171d] w-[100vw] h-[75vh] mb-28 md:w-[70vw] [box-shadow:_0_10px_10px_rgb(0_0_0_/_80%)] rounded-[5vh] mt-5 grid place-items-center overflow-hidden" >
                <form action="" method="post" className="w-10/12 grid place-items-center text-4xl">
                    <label htmlFor="" className="pb-2">Name</label>
                    <input type="text" className="pl-5 pr-5 rounded-[4vh] border-2 border-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-cyan-400  bg-testBg  w-10/12" />
                    <label htmlFor="" className="pt-5 pb-2">Email</label>
                    <input type="text" className="pl-5 pr-5 rounded-[4vh] border-2 border-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-cyan-400  bg-testBg  w-10/12" />
                    <label htmlFor="" className="pt-5 pb-2">Message</label>
                    <textarea rows={6} className="rounded-[4vh] border-2 border-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 overflow-hidden resize-none p-5 bg-testBg  w-10/12" />
                    <button className="mt-2 rounded-[2vh] bg-testBg border-2 border-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-cyan-400  pr-2 pl-2">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;