import React, { useEffect, useRef, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    const [volunteers, setVolunteers] = useState([]);
    const searchRef = useRef();
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('volunteers.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };

    return (
        <section className='container mx-auto px-4 my-16'>
            <h1 className='text-center text-lg lg:text-4xl font-semibold mb-5 uppercase'>I grow by helping people in need.</h1>
            <div className="form-control mb-10">
                <div className="input-group flex justify-center">
                    <input
                        ref={searchRef}
                        type="text"
                        placeholder="Search…"
                        className="input input-accent w-72 max-w-sm lg:w-full lg:max-w-md input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                    <button
                        onClick={handleSearch}
                        className="btn btn-accent text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5'>
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