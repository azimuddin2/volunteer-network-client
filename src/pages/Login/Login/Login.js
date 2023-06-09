import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
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
        <section className='my-20'>
            <div>
                <Link to='/'>
                    <img src={logo} alt="Logo" style={{ height: '60px' }} className='mx-auto mb-8' />
                </Link>
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mx-auto">
                <h1 className='text-2xl font-semibold text-center mt-6'>Login</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control mb-2">
                        <input
                            name='email'
                            type="email"
                            placeholder="Email"
                            required
                            className="input input-bordered focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name='password'
                            type="password"
                            placeholder="Password"
                            required
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