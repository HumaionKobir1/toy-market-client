import Banner from "./Banner";
import Carousel from "./Carousel/Carousel";
import Categories from "./Categories";
import PhotoGalary from "./PhotoGalary/PhotoGalary";
import Services from "./Services";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init();
    return (
        <div>
            <div data-aos="fade-up">
                <Banner></Banner>
            </div>
            
            <div>
                <PhotoGalary></PhotoGalary>
            </div>

            <div>
                <Categories></Categories>
            </div>

            <div data-aos="fade-down">
                <Services></Services>
            </div>

            <div data-aos="fade-up">
                <Carousel></Carousel>
            </div>


            
        </div>
    );
};

export default Home;