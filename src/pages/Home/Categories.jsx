import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [toyCategories, setToyCategories] = useState([]);
    const [activeTab, setActiveTab] = useState(' ')
    useEffect(() => {
        fetch(`https://toy-market-server-humaionkobir341-gmailcom.vercel.app/allToy/${activeTab}`)
        .then(res => res.json())
        .then(data => {
            setToyCategories(data);
        })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div className="md:mt-16 mt-10">
            <h1 className="text-4xl font-semibold text-center ">Shop By Category</h1>

            <div className="tabs mx-auto w-1/3 d-flex justify-center mt-7 items-center">
            <div
              onClick={() => handleTabClick("Digital-pets")}
              className={`tab border border-gray-500 rounded-lg text-gray-700 tab2 w-32 h-12 ${
                activeTab == "Digital-pets" ? " bg-[#f5beb0] text-gray-700 font-semibold rounded-lg" : ""
              }`}
            >
              Digital-pets
            </div>
            <div
              onClick={() => handleTabClick("Robot-kit")}
              className={`tab border border-gray-500 rounded-lg text-gray-700 tab2 w-32 h-12 ${
                activeTab == "Robot-kit" ? " bg-[#f5beb0] text-gray-700 font-semibold  rounded-lg" : ""
              }`}
            >
              Robot-kit
            </div>

            <div
              onClick={() => handleTabClick("Toy-robots")}
              className={`tab border border-gray-500 rounded-lg text-gray-700 tab2 w-32 h-12 ${
                activeTab == "Toy-robots" ? " bg-[#f5beb0] text-gray-700 font-semibold rounded-lg" : ""
              }`}
            >
              Toy-robots
            </div>
          </div>


            <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-8 justify-center items-center w-full md:w-5/6 mx-auto px-3">
                {
                    toyCategories.map(toyCategory => <Category
                        key={toyCategory._id}
                        toyCategory={toyCategory}
                    ></Category> )
                }
            </div>
        </div>
    );
};

export default Categories;