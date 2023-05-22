import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useTitle } from "../../Title/useTitle";



const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handleToyAdd = (event) => {
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const userName = user?.displayName;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newToy = {photo, title, userName, email, subCategory, price, rating, quantity, details};
        console.log(newToy);

        // send data to the server
        fetch('https://toy-market-server-humaionkobir341-gmailcom.vercel.app/allToy', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    useTitle('Kidol | AddToy');

    return (
        
        <div className="w-full md:w-5/6 mx-auto px-3 py-5 bg-gray-100">
            <h1 className="text-2xl font-bold my-4 text-center text-gray-600">Add A Toy</h1>
            <form onSubmit={handleToyAdd} className="md:w-9/12 mx-auto rounded-lg bg-white shadow-lg p-8">
                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="pictureUrl" className="block font-medium">Picture URL of the toy:</label>
                    <input
                        type="text"
                        id="pictureUrl"
                        name="photo"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                    
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="Title" className="block font-medium">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="title"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                </div>

                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="sellerName" className="block font-medium">Seller Name:</label>
                    <input
                        type="text"
                        id="sellerName"
                        name="userName"
                        defaultValue={user?.displayName}
                        className="border border-gray-300 p-2 w-full"
                    />
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="sellerEmail" className="block font-medium">Seller Email:</label>
                    <input
                        type="email"
                        id="sellerEmail"
                        name="email"
                        defaultValue={user?.email}
                        className="border border-gray-300 p-2 w-full"
                    />
                    </div>
                </div>

                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="subCategory" className="block font-medium">Sub-category:</label>
                    <select
                        id="subCategory"
                        className="border border-gray-300 p-2 w-full"
                        name="subCategory"
                        required
                    >
                        <option value="">Select a sub-category</option>
                        <option value="Digital-pets">Digital-pets</option>
                        <option value="Robot-kit">Robot-kit</option>
                        <option value="Toy-robots">Toy-robots</option>
                    </select>
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="price" className="block font-medium">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                </div>
                
                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="rating" className="block font-medium">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="quantity" className="block font-medium">Available Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                </div>
                
                <div className=" md:mb-0 mb-4">
                <label htmlFor="description" className="block font-medium">Detail Description:</label>
                <textarea
                    id="description"
                    className="border border-gray-300 p-2 w-full h-24"
                    name="details"
                    required
                ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#f5beb0] hover:bg-[rgb(231,161,144)] text-gray-800 font-bold py-2 px-4 rounded">
                Add Toy
                </button>
            </form>
        </div>
    );
};

export default AddToy;