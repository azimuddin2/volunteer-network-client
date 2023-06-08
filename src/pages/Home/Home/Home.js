import React, { useEffect, useRef, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';
import { BiSearch } from 'react-icons/bi';

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
            <div className='relative mb-10 text-center'>
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search..."
                    className="input input-accent w-72 max-w-sm lg:w-full lg:max-w-md input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
                <button
                    style={{ marginLeft: '-56px' }}
                    onClick={handleSearch}
                    className='btn btn-accent text-white absolute'
                >
                    <BiSearch className='text-2xl'></BiSearch>
                </button>
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