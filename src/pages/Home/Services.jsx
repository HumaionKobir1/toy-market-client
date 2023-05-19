
const Services = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse md:gap-3 gap-7 md:mt-16 mt-10 md:w-5/6 mx-auto px-3 justify-between">

            <div className="flex p-3 w-96 justify-center items-center gap-4 shadow-xl border rounded-lg">
                <div className="border border-gray-400 p-2 rounded-lg">
                    <img src="https://cdn.shopify.com/s/files/1/0623/7808/2524/files/2.png?v=1644829066" alt="" />
                </div>
                <div>
                    <h3 className="text-2xl">FREE SHIPPING</h3>
                    <p className="text-base mt-1">Free Shipping On All Orde</p>
                </div>
            </div>
            <div className="flex p-3 w-96 justify-center items-center gap-4 shadow-xl border rounded-lg">
                <div className="border border-gray-400 p-2 rounded-lg">
                    <img src="https://cdn.shopify.com/s/files/1/0623/7808/2524/files/1.png?v=1644829079" alt="" />
                </div>
                <div>
                    <h3 className="text-2xl">FREE RETURN
</h3>
                    <p className="text-base mt-1">Money Back Guarantee</p>
                </div>
            </div>

            <div className="flex p-3 w-96 justify-center items-center gap-4 shadow-xl border rounded-lg">
                <div className="border border-gray-400 p-2 rounded-lg">
                    <img src="https://cdn.shopify.com/s/files/1/0623/7808/2524/files/4.png?v=1644829096" alt="" />
                </div>
                <div>
                    <h3 className="text-2xl">24/7 SUPPORT
</h3>
                    <p className="text-base mt-1">We Support Online 24 Hrs</p>
                </div>
            </div>

            <div className="flex p-3 w-96 justify-center items-center gap-4 shadow-xl border rounded-lg">
                <div className="border border-gray-400 p-2 rounded-lg">
                    <img src="https://cdn.shopify.com/s/files/1/0623/7808/2524/files/3.png?v=1644829102" alt="" />
                </div>
                <div>
                    <h3 className="text-2xl">RECIEVE GIFT CARD
</h3>
                    <p className="text-base mt-1">All Over Oder $50</p>
                </div>
            </div>

        </div>
    );
};

export default Services;