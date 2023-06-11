import { Link } from "react-router-dom";

const CardDocente = (props) => {
    const { docentes } = props;

    return (
        <div className="mt-4 grid grid-cols-1 mr-8 ml-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {docentes.map((docente) => (
                <div className="bg-white shadow p-4 rounded-lg hover:bg-gray-100 mr" key={docente.id}>
                    {/* <h1 className="text-gray-800 font-sans text-2xl font-bold mb-2">{docente.fullName}</h1> */}
                    <Link to={`/docentes/${docente.id}/publicaciones`} className="text-gray-800 font-sans text-2xl font-bold mb-2">{docente.fullName}</Link>
                    {/* <h2 className="text-gray-800 font-semibold text-xs mb-2">{docente.facultade.nombreFacultad}</h2> */}
                    {/* <h2 className="text-gray-800 font-semibold text-xs mb-2">{docente.facultade.nombreFacultad}</h2> */}

                    <h2 className="text-gray-800 font-semibold text-xs mb-2">
                        {docente.facultade?.nombreFacultad || "NaN"}
                    </h2>





                    <h4 className="text-gray-800 text-2xs mb-4">{docente.email}</h4>
                </div>
            ))}
        </div>
    );
}

export default CardDocente;
