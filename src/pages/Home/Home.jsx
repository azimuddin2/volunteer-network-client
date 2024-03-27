import { useQuery } from '@tanstack/react-query';
import './Home.css';
import Volunteer from '../../components/Volunteer/Volunteer';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useRef, useState } from 'react';
import searchGif from '../../assets/images/search.gif';

const Home = () => {
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };

    const { data: volunteers = [], isLoading, error } = useQuery({
        queryKey: ['volunteers', search],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/volunteers?search=${search}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className='volunteers-section'>
            <div>
                <h1 className="home-title">I grow by helping people in need.</h1>
                <div className='input-btn-group'>
                    <input
                        ref={searchRef}
                        className='search-input-field'
                        placeholder='Search...'
                        type="text"
                    />
                    <button onClick={handleSearch} className='search-btn'>Search</button>
                </div>
            </div>
            {
                volunteers?.length > 0 ?
                    (
                        <div className='volunteers'>
                            {
                                volunteers.map(volunteer => <Volunteer
                                    key={volunteer._id}
                                    volunteer={volunteer}
                                ></Volunteer>)
                            }
                        </div>
                    )
                    :
                    (
                        <div className='not-result-found'>
                            <img src={searchGif} alt="search gif" />
                            <h2>Ups!... no results found</h2>
                            <p>Please try another search</p>
                        </div>
                    )
            }
        </section>
    );
};

export default Home;