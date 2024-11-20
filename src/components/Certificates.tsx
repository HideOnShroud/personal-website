import certList from '../data/certList';
import CertificateComponent from './CertificateComponent';


const Certifiactes = () => {
    return (
        <div>
            <div id="certificates" className="m-auto pt-10">
                <h1 className="text-6xl text-center mt-10 mb-10">Certificates</h1>
                <div className="pt-10 pb-10 flex flex-wrap justify-center gap-20">
                    {certList.map((item) => (
                        <CertificateComponent
                            cert={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certifiactes;