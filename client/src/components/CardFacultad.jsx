const CardFacultad = (props) => {
    const { facultades } = props;
    return (

        <div className="flex flex-wrap justify-center mt-4">
            <div className="max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-white">
                <div className="flex flex-wrap justify-center"> {/* Contenedor interno con flex-wrap y justify-center */}
                    {facultades.map((facultad) => (
                        <a href="#" key={facultad.id} className="block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:bg-white dark:border-gray-100 dark:hover:bg-gray-80 mx-2 mb-4">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-700">{facultad.nombreFacultad}</h5>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}


{/* <div className="max-w-4xl text-center max-h-4xl px-8 py-4 mx-auto mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800" style={{ cursor: 'auto' }} key={facultades.codigoFacultad}>
<h1 className="text-white font-sans text-2xl font-bold mb-2">{facultad.nombreFacultad}</h1>
</div> */}

export default CardFacultad;
