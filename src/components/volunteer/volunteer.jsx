import './Volunteer.css';

const Volunteer = ({ volunteer }) => {
    const { image, title, bgColor } = volunteer;

    return (
        <div className="volunteer">
            <img style={{ width: '100%' }} src={image} alt={title} />
            <div className='volunteer-title'>
                <h2
                    style={{ backgroundColor: `${bgColor}` }}
                >
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default Volunteer;