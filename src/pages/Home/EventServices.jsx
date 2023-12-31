import { useLoaderData } from "react-router-dom";
import SingleEvent from "./SingleEvent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const EventServices = () => {
    const events = useLoaderData();
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="fade-up" >
            <h2 className="text-center text-2xl font-bold">Our Services</h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    events.map(event => <SingleEvent key={event.id} event={event}></SingleEvent>)
                }
            </div>
        </div>
    );
};

export default EventServices;