import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Event from "../../components/Event/Event";
import './Events.css';

const Events = () => {
    const { user } = useAuth();

    const { data: events = [], isLoading, error } = useQuery({
        queryKey: ['events', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/events?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    else if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section>
            <div className="events">
                {
                    events?.map(event => <Event
                        key={event._id}
                        event={event}
                    ></Event>)
                }
            </div>
        </section>
    );
};

export default Events;