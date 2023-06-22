import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
    Bars3Icon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'
import { AuthContext } from "../../providers/AuthProvider";


const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .then(error => console.log(error))
    }

    return (
        <div className='w-full md:w-5/6 mx-auto px-3'>
        <div className=' py-5 mx-auto '>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <img className=' h-12' src='https://htmldemo.net/kidol/kidol/assets/img/logo.png' alt="" />
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-12 lg:flex text-lg'>
                
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/allToys">All Toys</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>

                {user?.email && 
                <>
                    <li><Link to="/myToy">My Toy</Link></li>
                    <li><Link to='addToy'>Add Toy</Link> </li>
                </>
                }
                
                
                
                </ul>

                <div className='flex justify-center items-center gap-3'>
                    {user && <img className='w-11 h-11 rounded-full' src={user.photoURL} title={user.displayName}  alt="" /> }
                    
                    {user ? 
                    <button onClick={handleLogOut} className='bg-[#f5beb0] mt-3 hover:bg-[rgb(231,161,144)] mx-auto md:mx-0 mb-3   font-bold py-3 px-4 rounded'>Logout</button> :

                    <Link to='/login' className='inline-flex md:block items-center'>
                    <button className='bg-[#f5beb0] hover:bg-[#e7a190] mx-auto md:mx-0 mb-3 mt-3  font-bold py-3 px-4 rounded'>Login</button>
                    </Link>
                    }
                </div>

                {/* Mobile Navbar Section */}
                <div className='lg:hidden '>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3Icon className='w-5 text-gray-500' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10 '>
                    <div className='p-5 bg-slate-900 text-white border rounded shadow-sm'>
                        {/* Logo & Button section */}
                        <div className='flex items-center justify-between mb-4'>
                        <div>
                        <Link to='/' className='inline-flex items-center'>
                            <img className=' h-20' src='https://htmldemo.net/kidol/kidol/assets/img/logo.png' alt="" />
                        </Link>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                            <button
                            aria-label='Close Menu'
                            title='Close Menu'
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <XMarkIcon className='w-5 text-gray-500' />
                            </button>
                        </div>
                        </div>
                        {/* Mobile Nav Items Section */}
                        <nav>
                        <ul className='space-y-4 text-white'>
                            <li>
                            <Link to='/' className='default'>
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/Blog'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Blog
                            </Link>
                            </li>
                            <li>
                                <Link to="/allToys">All Toys</Link>
                            </li>
                            {user?.email && 
                            <>
                                <li><Link to="/myToy">My Toy</Link></li>
                                <li><Link to='addToy'>Add Toy</Link> </li>
                            </>
                            }
                            <li>
                            <Link
                                to='/login'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Login
                            </Link>
                            </li>
                        </ul>
                        
                        </nav>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navber;