import { useQuery } from '@tanstack/react-query';
import './Home.css';

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
        <section>
            <div>
                <h1 className="home-title">I grow by helping people in need.</h1>
            </div>
            <div>
{
    volunteers.length
}
            </div>
        </section>
    );
};

export default Home;