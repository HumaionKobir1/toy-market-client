import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex shadow-2xl bg-base-100 flex-col md:flex-row gap-10 md:gap-3 w-full md:w-5/6 mx-auto my-5 px-3 md:py-24 py-10 items-center justify-center ">
            <div className="w-full   px-4 grid items-center justify-center">
                <img
                className=""
                src="https://99dokan.com/admins/images/signin.jpg"
                alt="Logo"
                />
                <Link className='mt-10 underline md:block hidden text-indigo-900 font-medium text-center' to='/signUp'><span>Create an account</span></Link>
            </div>
            <div className="w-full  items-center justify-center">
                <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Login</h2>
                <form className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                    </label>

                    <div className="flex items-center">
                    <span className="absolute  pl-3">
                        <FaUser />
                    </span>
                    <input
                        className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text" 
                        placeholder="Enter your name"
                    />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                    </label>
                    
                    <div className="flex items-center">
                    <span className="absolute pl-3">
                        <FaLock />
                    </span>
                    <input
                        className="appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="remember" className="flex items-center">
                    <input
                        className="mr-2 leading-tight"
                        id="remember"
                        type="checkbox"
                    />
                    <span className="text-sm text-gray-700">Remember me</span>
                    </label>
                </div>
                <div>
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                    >
                    Login
                    </button>
                </div>
                </form>
                <div className='flex gap-10 md:mt-20 mt-10'>
                    <p>Or login with</p>
                    <div className='flex gap-3'>
                        <button><FaFacebook className='w-6 h-6'></FaFacebook></button>
                        <button><FaGoogle className='w-6 h-6'></FaGoogle></button>
                        <button><FaTwitter className='w-6 h-6'></FaTwitter></button>
                    </div>
                </div>
                <Link className='mt-10 underline md:hidden block text-indigo-900 font-medium text-center' to='/signUp'><span>Create an account</span></Link>

            </div>
        </div>
    );
};

export default Login;