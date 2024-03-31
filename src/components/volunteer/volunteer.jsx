import { format } from 'date-fns';
import './Volunteer.css';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Volunteer = ({ volunteer }) => {
    const { image, title, bgColor } = volunteer;
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const date = new Date()
    const formatDate = format(date, 'PP');

    const handleAddToEvent = (volunteer) => {
        const { image, title } = volunteer;

        const eventInfo = {
            image,
            title,
            date: formatDate,
            email: user?.email
        };

        if (user?.email) {
            fetch('http://localhost:5000/events', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventInfo)
            })
                .then(res => res.json())
                .then(result => {
                    if(result.insertedId){
                        toast.success('Event program added successful.')
                    }
                    else{
                        toast.success(result.message);
                        navigate('/events');
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please login to add volunteer.",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3F90FC",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    };

    return (
        <div className="volunteer">
            <img style={{ width: '100%' }} src={image} alt={title} />
            <div className='volunteer-title'>
                <h2
                    onClick={() => handleAddToEvent(volunteer)}
                    style={{ backgroundColor: `${bgColor}` }}
                >
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default Volunteer;