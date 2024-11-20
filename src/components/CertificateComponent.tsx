import { certificates } from '../types/certificates'
import { motion } from 'framer-motion'


interface CertificateProps {
    cert: certificates
}

const CertificateComponent = ({ cert }: CertificateProps) => {


    return (
        <div>
            <a href={cert.link} target="_blank" rel="noreferrer">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#07171d] w-[60vw] xl:w-[40vw] md:h-[40vh] h-[30vh] xl:h-[60vh] hover:scale-110 ease-in-out selection:scale-150 duration-300 
                    [box-shadow:_0_10px_10px_rgb(0_0_0_/_80%)] rounded-[10%] grid place-items-center overflow-hidden" >
                    <img src={cert.image} alt="" className="rounded pointer-events-none overflow-hidden xl:h-[50vh] md:h-[35vh] h-[20vh]" />
                    <h1 className='xl:text-3xl xl:pb-4 md:text-2xl text-xl pl-2 pr-2 '>{cert.title}</h1>
                </motion.div >
            </a>
        </div>
    );
}

export default CertificateComponent;