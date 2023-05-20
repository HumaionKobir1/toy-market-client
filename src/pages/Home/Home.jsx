import Banner from "./Banner";
import Carousel from "./Carousel/Carousel";
import Categories from "./Categories";
import PhotoGalary from "./PhotoGalary/PhotoGalary";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGalary></PhotoGalary>
            <Categories></Categories>
            <Services></Services>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;