import { useState } from 'react';
import { FaUser, FaLock, FaFacebook, FaGoogle, FaTwitter, FaEnvelope, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        console.log(name, email, password, photoUrl);       

    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };

    return (
        <div className="flex shadow-2xl bg-base-100 flex-col md:flex-row gap-10 md:gap-3 w-full md:w-5/6 mx-auto my-5 px-3 md:py-24 py-10 items-center justify-center ">
            <div className="w-full  px-4 grid items-center justify-center">
                <img
                className="h-[500px]"
                src="https://99dokan.com/admins/images/signin.jpg"
                alt="Logo"
                />
                <p className='md:ml-16 mt-7'>Already have an account <Link to='/login' className='mt-10 underline text-indigo-900 font-medium'>Login</Link></p>
            </div>
            <div className="w-full gird items-center justify-center">
                <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Create an Account</h2>
                <form onSubmit={handleRegister} className='w-full max-w-sm'>
                <div className='mb-4'>
                    <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Your name</label>
                    <div className='relative'>
                    <FaUser className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-2/4" />

                        <input className='pl-10 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500' type="text" name='name' placeholder='Your name' required/>
                    </div>
                </div>

                <div className='mb-4'>
                    <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Your name</label>
                    <div className='relative'>
                    <FaImage className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-2/4" />

                    <input
                            type="text"
                            id="photoUrl"
                            name='photo'
                            className="pl-10 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            placeholder="Enter photo URL"
                        />                    </div>
                </div>

                <div className='mb-4'>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <div className='relative'>
                    <FaEnvelope className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-2/4" />
                    <input
                            type="email"
                            id="email"
                            name='email'
                            className="pl-10 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            placeholder="Enter your email"
                        />                    </div>
                    
                </div>
                
                <div className='mb-2'>
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <div className='relative'>
                    <FaLock className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-2/4" />
                    <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name='password'
                            className="pl-10 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            placeholder="Enter your password"
                        />                    </div>
                </div>

                <div className='flex gap-1 justify-start'>
                    <input onClick={handleShowPassword}  type="checkbox" id="show-password" />
                    <label htmlFor="show-password">Show Password</label>
                </div>
                

                <div className='text-center mt-4 mb-4'>
                    <p className='text-lg font-medium text-red-900'></p>
                    <p className='text-lg font-medium text-green-800'></p>
                </div>

                <div className="flex justify-start -mt-5">
                    <label className="text-gray-500 font-bold my-4 flex items-center">
                        <input className="leading-loose text-pink-600 top-0" type="checkbox"/>
                            <span className="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                <a href="#"
                                    className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> Terms and Conditions of the site
                                        </a> and
                                <a href="#"
                                    className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"> the information data policy.</a>
                            </span>
                    </label>
                </div>
                <div className="flex items-center justify-between mt-6">
                        <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        >
                        Sign Up
                        </button>
                    </div>
            </form>
                <p className='ml-44 mt-5 text-lg'>Or</p>
                <div className='flex gap-4 ml-32 mt-5'>
                    <button><FaFacebook className='w-6 h-6'></FaFacebook></button>
                    <button><FaGoogle className='w-6 h-6'></FaGoogle></button>
                    <button><FaTwitter className='w-6 h-6'></FaTwitter></button>
                </div>

                {/* <form onSubmit={handleRegister} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label  className="block text-gray-700 font-bold mb-2">
                        Name
                        </label>

                        <div className="relative">
                        <input
                            type="text"
                            name='userName'
                            className="pl-10 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            placeholder="Enter your name"
                        />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label  className="block text-gray-700 font-bold mb-2">
                        Email
                        </label>
                        <div className="relative">
                        <FaEnvelope className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-2/4" />
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="pl-10 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            placeholder="Enter your email"
                        />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label  className="block text-gray-700 font-bold mb-2">
                        PhotoUrl
                        </label>

                        <div className="relative">
                        <FaImage className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-2/4" />
                        <input
                            type="text"
                            id="photoUrl"
                            name='photo'
                            className="pl-10 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            placeholder="Enter photo URL"
                        />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label  className="block text-gray-700 font-bold mb-2">
                        Password
                        </label>
                        <div className="relative">
                        <FaLock className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-2/4" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name='password'
                            className="pl-10 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            placeholder="Enter your password"
                        />
                        </div>
                    </div>
                    <div className="top-0 right-0 mr-3 mt-4">
                    <input
                        type="checkbox"
                        id="showPassword"
                        className="form-checkbox text-gray-700"
                        checked={showPassword}
                        onChange={handleShowPassword}
                    />
                    <label htmlFor="showPassword" className="ml-2 text-gray-700">
                    Show Password
                    </label>
                </div>
                    
                    <div className="flex items-center justify-between mt-6">
                        <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        >
                        Sign Up
                        </button>
                    </div>
                </form> */}
                
            </div>
        </div>
    );
};

export default SignUp;