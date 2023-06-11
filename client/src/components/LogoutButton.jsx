const LogoutButton = ({ onClick, children }) => {
    return (<>
        <button className='bg-red-400 text-white text-2xl  font-bold font-mono text- py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'
            onClick={onClick}>
            {children}
        </button>
    </>);
}

export default LogoutButton;
