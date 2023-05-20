
const Category = ({toyCategory}) => {
    const {photo, title, rating, price} = toyCategory;
    return (
        <div className=" rounded overflow-hidden shadow-lg">
            <img className="w-80 h-80 mx-auto" src={photo} alt="Product" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">Price: ${price}</p>
                <div className="flex items-center mt-2">
                </div>
            </div>
            <div className="flex justify-between px-6 py-4">
                <p className="text-gray-700 ml-1">{rating}</p>
                <button className="bg-[#f5beb0] hover:bg-[rgb(231,161,144)] text-gray-700 font-bold py-2 px-4 rounded-full">
                View Details
                </button>
            </div>
        </div>
    );
};

export default Category;