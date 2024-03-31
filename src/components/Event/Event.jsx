import './Event.css';

const Event = ({ event }) => {
    const { image, title, date } = event;

    return (
        <div className='event'>
            <img src={image} alt="" />
            <div>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
            <button>
                Cancel
            </button>
        </div>
    );
};

export default Event;