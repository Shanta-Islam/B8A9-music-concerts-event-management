import { useLoaderData, useParams } from "react-router-dom";

const EventServiceDetails = () => {
    const event = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleEvent = event.find(e => e.id == idInt);
    return (
        <div className="py-20">
            <div className="card w-3/4 bg-slate-800 shadow-xl mx-auto">
                <figure><img src={singleEvent.img} alt="Shoes" className="w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleEvent.title}</h2>
                    <p>{singleEvent.desc}</p>
                    <p>Price: {singleEvent.price}</p>
                </div>
            </div>
        </div>
    );
};

export default EventServiceDetails;