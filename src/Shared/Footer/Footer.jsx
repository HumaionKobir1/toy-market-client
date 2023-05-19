import { FaLocationArrow, FaPhone, FaMailchimp } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className=' bg-gray-100'>
            <div className='md:w-5/6 mx-auto grid md:grid-cols-4 md:py-20 py-5 px-3'>
                <div className='md:border-e-2 text-black  mb-3 md:mb-0'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/logo.png" alt="" />
                    <p className="my-2 flex gap-2"><FaLocationArrow></FaLocationArrow> Kidol store Bangladesh</p>
                    <p className='flex gap-2'><FaPhone></FaPhone> 0123-456-789</p>
                    <p className="my-2 flex gap-2"><FaMailchimp></FaMailchimp> kidol@gmail.com</p>
                </div>
                <div className='md:border-e-2 text-black md:px-20 mb-3 md:mb-0'>
                    <h3 className='text-3xl mb-5'>Services</h3>
                    <p>About Us</p>
                    <p className='my-2'>Contact Us</p>
                    <p className='my-2'>Privacy Policy</p>
                    <p className='my-2'>Delivery Information</p>

                </div>
                <div className='md:border-e-2 text-black md:px-20'>
                    <h3 className='text-3xl mb-5'>Extras</h3>
                    <p className='my-2'>Search</p>
                    <p>News</p>
                    <p className='my-2'>Wishlist</p>
                    <p className='my-2'>All Products</p>
                    <p className='my-2'>All Collections</p>
                </div>

                <div className=' text-black mb-3 md:mb-0 md: pl-3'>
                    <h3 className='text-3xl mb-5'>Newsletter</h3>
                    <p className='mb-4'>Subscribe to our newsletters now and stay up to date with new collection and exclusive offers.</p>
                    <input className='rounded p-3' type="text" placeholder='Enter Your Email' /> <button className='btn text-black bg-[#f5cfb7] border-none'>Sign up</button>
                </div>
            </div>
            <p className='text-center text-black p-2 -mt-5'><small>All rights reserved Kidol</small></p>
        </div>
    );
};

export default Footer;