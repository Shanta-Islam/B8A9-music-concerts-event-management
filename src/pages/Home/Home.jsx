import Banner from "./Banner";
import Contact from "./Contact";
import EventServices from "./EventServices";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EventServices></EventServices>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;