const NotPublicaciones = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">No se encontraron publicaciones para este docente</h2>
      <p className="text-xl text-gray-600">Puede que el docente aún no haya realizado ninguna publicación.</p>
    </div>
  );
};

export default NotPublicaciones;
