import { useLoaderData } from "react-router-dom";
import ToyRow from "../../Shared/AllToyTable/ToyRow";

const AllToys = () => {
    const allToys = useLoaderData()
    console.log(allToys);
    return (
        <div className="w-full md:w-5/6 mx-auto px-3 mt-10">
            <h1>this is my toys</h1>
            <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>SELLER NAME</th>
                        <th>TOY NAME</th>
                        <th>CATEGORY</th>
                        <th>AVAILABLE QUANTITY</th>
                        <th>PRICE</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}

                        {
                            allToys.map(toys => <ToyRow
                                key={toys._id}
                                toys={toys}
                            ></ToyRow> )
                        }
                        
                    </tbody>
                    
                </table>
        </div>
    );
};

export default AllToys;