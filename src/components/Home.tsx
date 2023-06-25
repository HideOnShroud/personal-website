import wave from "../assets/wave.png"
const Home = () => {
    return (
        <div id="home" className="pt-20 text-4xl h-screen overflow-hidden 2xl:text-6xl 2xl:pt-40 md:text-5xl md:pt-40 lg:text-6xl text-center">
            <h1 className="w-8/12 [text-shadow:_0_4px_4px_rgb(0_0_0_/_80%)] m-auto">Hello World,<br /> I'm Guga Natroshvili,<br /> a passionate software developer based in Georgia.</h1>
            <img src={wave} alt="" className="animate-wave min-w-max 2xl:mt-24 lg:mt-24" />
        </div>
    );
}

export default Home;