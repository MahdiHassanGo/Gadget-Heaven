import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
            <h1 className='text-6xl font-bold text-red-500 mb-4'>Error 404</h1>
            <p className='text-xl text-gray-700 mb-8'>It doesn't exist</p>
            <Link to="/" className="btn bg-purple-700 text-white px-6 py-2 rounded-3xl hover:bg-purple-600">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;