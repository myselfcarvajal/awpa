const Welcome = () => {
    return (
        <div className="px-4 mx-auto mt-10 max-w-7xl sm:mt-14">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 font-display sm:text-5xl md:text-6xl xl:text-7xl">
                    <span className="block xl:inline  text-purple-400">¡Welcome!</span>
                    <span className="block text-cool-indigo-600 text-4xl mt-3 mr-8 ml-8">
                    Nuestra plataforma está diseñada para brindarte acceso rápido y sencillo a todo el conocimiento académico que necesitas. </span>
                </h1>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-justify">
                Aquí encontrarás una amplia variedad de recursos y contenidos relacionados con la producción académica.Ya sea que estés buscando investigaciones, publicaciones, artículos o cualquier otro tipo de material académico, estás en el lugar adecuado.
                </p>
            </div>
        </div>
    );
}

export default Welcome;
