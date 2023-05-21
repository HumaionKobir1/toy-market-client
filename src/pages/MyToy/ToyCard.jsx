
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
                <div className="py-4 px-6">
                    <h1 className="text-xl font-bold text-gray-800">{title}</h1>
                    <p className="mt-2 text-sm text-gray-600">{rating}</p>
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

            
            <button className="bg-[#f5beb0] hover:bg-[#e7a190] mx-auto md:mx-0 mb-3 mt-3  font-bold py-3 px-4 rounded">Update</button>
            
            </div>
        </div>
    );
};

export default ToyCard;