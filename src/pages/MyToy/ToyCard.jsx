import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ToyCard = ({toy, handleDelete}) => {
    const {photo, title, email,  price, quantity, rating, _id} = toy;

    

    return (
        <div className="md:flex px-3 my-10 mx-auto justify-center md:justify-between items-center w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex gap-3">
                <div className="grid items-center justify-center">
                    <button onClick={()=> handleDelete(_id)} className="bg-slate-900 rounded-[100%] text-white px-3 py-1 mr-3">Delete</button>
                </div>
                <div className="py-2">
                    <img className="w-36 h-36 rounded-lg" src={photo} alt="" />
                </div>
                <div className="py-4 px-6 my-auto">
                    <h1 className="text-xl font-bold text-gray-800">{title}</h1>
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
                    <p className="mt-2 text-base  ">Quantity: {quantity}</p>
                </div>
            </div>
            

            <div>
                <p className="text-base ">{email}</p>
            </div>

            <div>
                <p className="mt-2 text-base  ">Price: ${price}</p>
            </div>

            <div className="grid justify-center items-center">

            
            <Link to={`/updateToy/${_id}`}><button className="bg-[#f5beb0] hover:bg-[#e7a190] mx-auto md:mx-0 mb-3 mt-3  font-bold py-3 px-4 rounded">Update</button></Link>
            
            </div>
        </div>
    );
};

export default ToyCard;