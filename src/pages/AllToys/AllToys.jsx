import { useLoaderData } from "react-router-dom";
import ToyRow from "../../Shared/AllToyTable/ToyRow";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllToys = () => {
    AOS.init();

    const allToys = useLoaderData()
    const [query, setQuery] = useState('');

    const handleSearch = event => {
        event.preventDefault();
        const search = event.target.search.value;
        setQuery(search);
    }

    return (
        <div className="w-full md:w-5/6 mx-auto px-3 mt-10">
            <div data-aos="fade-left" className="mx-auto flex justify-center mb-4">
                <div className="flex ">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="w-64 bg-slate-100 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search..."
                        name="search"
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2 focus:outline-none hover:bg-blue-600"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
                </div>
            </div>

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
                            allToys.filter(post => {
                                if(query == ''){
                                    return post;
                                } else if(post.title.toLowerCase().includes(query.toLocaleLowerCase())){
                                        return post;
                                    
                                }
                            })
                            .map(toys => <ToyRow
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