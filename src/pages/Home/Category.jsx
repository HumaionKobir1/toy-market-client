import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = ({toyCategory}) => {
    AOS.init()
    const {photo, title, rating, price, _id} = toyCategory;
    return (
        <div data-aos="fade-up" className=" rounded overflow-hidden shadow-lg">
            <img className="w-80 h-80 mx-auto" src={photo} alt="Product" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">Price: ${price}</p>
                <div className="flex items-center mt-2">
                </div>
            </div>
            <div className="flex justify-between px-6 py-4">
                <div className="flex">
                <Rating
                    placeholderRating={rating}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                 />
                    <p className="text-gray-700 ml-1">{rating}</p>

                </div>
                <Link to={`/details/${_id}`}><button className="bg-[#f5beb0] hover:bg-[rgb(231,161,144)] text-gray-700 font-bold py-2 px-4 rounded-full">
                View Details
                </button></Link>
            </div>
        </div>
    );
};

export default Category;