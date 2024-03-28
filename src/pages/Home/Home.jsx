import { useQuery } from '@tanstack/react-query';
import './Home.css';
import Volunteer from '../../components/Volunteer/Volunteer';

const Home = () => {

    const { data: volunteers = [], isLoading, error } = useQuery({
        queryKey: ['volunteers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/volunteers`)
            const data = await res.json()
            return data;
        }
    })

    return (
        <section className='volunteers-section'>
            <div>
                <h1 className="home-title">I grow by helping people in need.</h1>
            </div>
            <div className='volunteers'>
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