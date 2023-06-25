interface Props {
    image: string
}
const Screenshots = ({ image }: Props) => {
    return (
        <div
            className="bg-[#07171d] w-[80vw] xl:w-[40vw] h-[70vh] xl:h-[70vh] hover:scale-110 ease-in-out duration-300 [box-shadow:_0_10px_10px_rgb(0_0_0_/_80%)] rounded-[10%] grid place-items-center overflow-hidden" >
            <img src={image} alt="" className="rounded" />

        </div >
    );
}

export default Screenshots;