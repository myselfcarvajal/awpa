import { format } from 'date-fns';
import {Link} from 'react-router-dom'

const CardPublicacion = (props) => {
    const { publicaciones } = props;

    return (
        <div className="mt-4">
            {publicaciones.map((publicacion) => {

                
                let date = new Date(publicacion.fechaPublicacion);
                let formattedDate = format(date, 'MMM dd, yyyy');

                return (
                    <div className="max-w-4xl max-h-4xl px-8 py-4 mx-auto mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800" style={{ cursor: 'auto' }} key={publicacion.id}>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{formattedDate}</span>
                            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{publicacion.autor}</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{publicacion.tituloPublicacion}</a>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{publicacion.descripcionPub}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <Link to={`/publicaciones/${publicacion.idPublicacion}`} className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</Link>
                            <div className="flex items-center">
                                <img src='https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png' alt="Author Photo" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                {/* <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{publicacion.docente.fullName}</a> */}

                                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{publicacion.docente ? publicacion.docente.fullName : "NaN"}</a>

                                
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

    );
}

export default CardPublicacion;
