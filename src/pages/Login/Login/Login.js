import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.png';

const Login = () => {
    return (
        <section className='my-20'>
            <div>
                <Link to='/'>
                    <img src={logo} alt="Logo" style={{ height: '60px' }} className='mx-auto mb-6' />
                </Link>
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto">
                <h1 className='text-xl font-semibold text-center mt-6'>Login</h1>
                <form className="card-body">
                    <div className="form-control mb-2">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                    </div>
                    <div className="form-control mb-2">
                        <input
                            type="text"
                            placeholder="Password"
                            className="input input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-white">Login</button>
                    </div>
                    <p className='text-center'>Don’t have an account? <Link to="/register" className='text-accent underline'>Please registration</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Login;