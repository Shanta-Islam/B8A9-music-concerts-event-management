import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleEvent = ({event}) => {
    return (
        <div className="card w-96 bg-slate-800 shadow-xl m-5">
            <figure><img src={event.img} alt="Shoes" className='w-full h-[240px]'/></figure>
            <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                {
                    event.desc.length > 100 
                    ? 
                    <p>{event.desc.slice(0,100)} <Link to={`/event-details/${event.id}`} className='text-blue-500 font-bold'>Read More...</Link></p>
                    :
                    <p>{event.desc}</p>
                }
                
                <p>Price: {event.price} TK</p>
                <div className="card-actions justify-end">
                    <Link to={`/event-details/${event.id}`}><button className="btn">Details</button></Link>
                </div>
            </div>
        </div>
    );
};
SingleEvent.propTypes = {
    event: PropTypes.object.isRequired
}
export default SingleEvent;