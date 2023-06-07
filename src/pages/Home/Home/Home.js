import React, { useEffect, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('volunteers.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])

    return (
        <section>
            <div>
                {
                    volunteers.map(volunteer => <Volunteer
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Volunteer>)
                }
            </div>
        </section>
    );
};

export default Home;