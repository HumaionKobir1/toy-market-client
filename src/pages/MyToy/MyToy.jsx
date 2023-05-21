import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyCard from "./ToyCard";
import Swal from "sweetalert2";

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const url = `http://localhost:5000/mytoy?email=${user.email}`

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setToys(data);
            console.log(data);
        })
    }, [url])

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:5000/myToy/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    const remaining = toys.filter(toy => toy._id !== id);
                    setToys(remaining);
                }
            })
            }
          })
    }

    return (
        <div>
            <div className="bg-slate-100 md:w-5/6 mx-auto p-4 mb-6">
            <h1 className="text-center text-3xl font-semibold">My Toys</h1>

                {
                    toys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                        handleDelete={handleDelete}
                    ></ToyCard> )
                }
            </div>
        </div>
    );
};

export default MyToy;