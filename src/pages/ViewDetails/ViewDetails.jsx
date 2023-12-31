import { Link, useLoaderData } from "react-router-dom";
import { useTitle } from "../../Title/useTitle";

const ViewDetails = () => {
    const toyDetails = useLoaderData();
    const {photo, title, rating, userName, email, price, quantity, details} = toyDetails;
    useTitle(`Kidol | ${title}`);
    return (
        <div className="md:w-5/6 mx-auto px-3 rounded-lg shadow-lg bg-slate-100 p-6">
        <div className="md:w-4/5 mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center bg-slate-100 justify-center">
                <img
                className=" w-3/4 h-96 r"
                src={photo}
                alt="Toy"
                />
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600">{userName}</p>
                <p className="text-gray-600">{email}</p>
            </div>
            <div className="mt-4 flex justify-between">
                <p className =" font-semibold text-lg">Price: <span className="text-[#f79a61] ">${price}</span> </p>
                <div className="flex items-center mt-2">
                <svg
                    className="w-4 h-4 fill-current text-yellow-500 mr-1"
                    viewBox="0 0 24 24"
                >
                    <path
                    d="M12 2L14.74 8.56L22 9.53L16.82 14.4L18.21 21L12 17.31L5.79 21L7.18 14.4L2 9.53L9.26 8.56L12 2Z"
                    />
                </svg>
                <p className="text-gray-600">{rating}</p>
                </div>
                <p className="text-gray-600">Available Quantity: {quantity
}</p>
            </div>
            <div className="mt-4">
                <p className="text-gray-600">
                {details}
                </p>
            </div>
            <Link to='/'><button  className="bg-[#f5beb0] hover:bg-[#e7a190] mx-auto md:mx-0 mb-3 mt-4  font-bold py-3 px-4 rounded w-full">Back</button></Link>
        </div>

        </div>
    );
};

export default ViewDetails;