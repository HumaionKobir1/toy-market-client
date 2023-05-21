import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const updateToys = useLoaderData();
    const {price, quantity, details, _id} = updateToys;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const details = form.details.value;
        const quantity = form.quantity.value;
        const updateToy = {price, details, quantity};
        console.log(updateToy);

        fetch(`http://localhost:5000/myToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }


    return (
        <div className="w-full md:w-5/6 mx-auto px-4 bg-slate-100 my-10">
            <h1 className="text-3xl text-center font-semibold text-slate-700 py-7">Update Your Toy</h1>
        <div className="bg-white p-6 rounded-md shadow-md ">
            <form onSubmit={handleUpdate}>
                <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
                    Price
                </label>
                <input
                    type="text"
                    id="price"
                    defaultValue={price}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    name="price"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 font-medium mb-1">
                    Available Quantity
                </label>
                <input
                    type="text"
                    id="quantity"
                    defaultValue={quantity}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    name="quantity"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
                    Detail Description
                </label>
                <textarea
                    id="description"
                    name="details"
                    defaultValue={details}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
                
                </div>
                <button
                type="submit"
                className="bg-[#f5beb0] hover:bg-[#e7a190] mx-auto md:mx-0 mb-3 mt-3  font-bold py-3 px-4 rounded w-full"
                
                >
                Update
                </button>
            </form>
        </div>
        </div>
    );
};

export default UpdateToy;