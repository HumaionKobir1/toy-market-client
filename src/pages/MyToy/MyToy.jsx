import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ToyCard from "./ToyCard";

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

    return (
        <div>
            <div className="bg-slate-100 md:w-5/6 mx-auto p-4">
            <h1 className="text-center text-3xl font-semibold">My Toys</h1>

                {
                    toys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    ></ToyCard> )
                }
            </div>
        </div>
    );
};

export default MyToy;