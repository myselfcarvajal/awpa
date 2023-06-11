import { format } from 'date-fns';

const Publicacion = (props) => {
    const { publicacion } = props;
    const { data } = publicacion;

    let date = new Date(data.fechaPublicacion);
    let formattedDate = format(date, 'MMM dd, yyyy');

    return (<>
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md overflow-hidden mr-auto ml-auto my-2">

            <div className="flex items-center justify-between p-4 pr-8 pl-8">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{formattedDate}</span>
                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{data.autor}</a>
            </div>

            <div className="p-8">
                <h2 className="text-xl font-bold mb-2">{data.tituloPublicacion}</h2>
                <p className="text-gray-700 mb-4">{data.descripcionPub}</p>

                <p className="text-gray-600 mb text-4xs font-bold"> Facultad:</p>
                <p className="text-gray-500 mb-4 text-2xs">{data.docente.facultade.nombreFacultad}</p>
            </div>
            <div className="p-4 bg-gray-200 flex items-center justify-between">
                <div>
                    <a href={data.urlPublicacion} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <i className="material-icons" style={{ color: 'rgb(0, 0, 0)' }}>open_in_new</i>
                    </a>
                </div>
                <div className="flex items-center">
                    <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-800">{data.docente.fullName}</a>
                    <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="Author Photo" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block self-end" />
                </div>
            </div>

        </div>
    </>);
}

export default Publicacion
