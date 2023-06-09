import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../assets/icons/logo.png';
import { Link } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [selectDate, setSelectDate] = useState(new Date());
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('volunteers.json')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const volunteer = form.volunteer.value;
        const date = form.date.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    return (
        <section className='my-16'>
            <div>
                <Link to='/'>
                    <img src={logo} alt="Logo" style={{ height: '60px' }} className='mx-auto mb-8' />
                </Link>
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto">
                <h1 className='text-2xl font-semibold text-center mt-6'>Register as a Volunteer</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control mb-2">
                        <input
                            name='name'
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                    </div>
                    <div className="form-control mb-2">
                        <input
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="input input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                    </div>
                    <div className='form-control mb-2'>
                        <select
                            name='volunteer'
                            className="select select-bordered input focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent">
                            {
                                volunteers.map(volunteer => <option
                                    key={volunteer._id}
                                    volunteer={volunteer}
                                >{volunteer.title}</option>)
                            }
                        </select>
                    </div>
                    <div className='form-control mb-2'>
                        <ReactDatePicker
                            name='date'
                            className='w-full input input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent'
                            selected={selectDate}
                            onChange={(date) => setSelectDate(date)}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name='password'
                            type="password"
                            placeholder="Password"
                            className="input input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-white">Registration</button>
                    </div>
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-accent underline'>Please Login</Link> </p>
                </form>
            </div>
        </section>
    );
};

export default Register;