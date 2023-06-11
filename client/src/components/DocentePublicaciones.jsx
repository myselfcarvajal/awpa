import { format } from 'date-fns';

const DocentePublicaciones = (props) => {
    const { docente } = props;
    const { data } = docente;

    if (!data) {
        return null;
    }

    return (
        <div className="mt-4">
            {data.map((_data) => {

                let date = new Date(_data.fechaPublicacion);
                let formattedDate = format(date, 'MMM dd, yyyy');

                return (
                    <>

                        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md overflow-hidden mr-auto ml-auto my-4">

                            <div className="flex items-center justify-between p-4 pr-8 pl-8">
                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{formattedDate}</span>
                                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{_data.autor}</a>
                            </div>

                            <div className="p-8">
                                <h2 className="text-xl font-bold mb-2">{_data.tituloPublicacion}</h2>
                                <p className="text-gray-700 mb-4">{_data.descripcionPub}</p>

                            </div>

                            <div className="p-4 bg-gray-200 flex items-center justify-between">
                                <div>
                                    <a href={_data.urlPublicacion} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        <i className="material-icons" style={{ color: 'rgb(0, 0, 0)' }}>open_in_new</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default DocentePublicaciones;
