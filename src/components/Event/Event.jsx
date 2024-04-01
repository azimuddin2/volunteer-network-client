import swal from 'sweetalert';
import './Event.css';
import toast from 'react-hot-toast';

const Event = ({ event, refetch }) => {
    const { image, title, date } = event;

    const handleCancel = (event) => {
        swal({
            title: "Are you sure?",
            text: `This Event Program - ${event.title}`,
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/events/${event._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged === true) {
                                refetch();
                                toast.success('Event program deleted successfully.');
                            }
                        })
                }
            });
    };

    return (
        <div className='event'>
            <img src={image} alt="" />
            <div className='event-info'>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
            <button
                onClick={() => handleCancel(event)}
                className='cancel-btn'
            >
                Cancel
            </button>
        </div>
    );
};

export default Event;