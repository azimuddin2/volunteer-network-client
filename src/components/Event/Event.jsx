import './Event.css';

const Event = ({ event }) => {
    const { image, title, date } = event;

    return (
        <div className='event'>
            <img src={image} alt="" />
            <div className='event-info'>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
            <button
                className='cancel-btn'
            >
                Cancel
            </button>
        </div>
    );
};

export default Event;