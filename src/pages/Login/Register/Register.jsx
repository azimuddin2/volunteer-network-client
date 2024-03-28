import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
import './Register.css';
import { Link } from "react-router-dom";
import logo from '../../../assets/logos/logo.png';
import { format } from "date-fns";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const date = new Date()
    const formatDate = format(date, 'PP');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const date = formatDate;

    };

    return (
        <section className="form-section">
            <div className="form-container">
                <Link to={'/'} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ height: '48px' }} src={logo} alt="logo" />
                </Link>
                <div className="form-part">
                    <h2 className="form-title">Register as a Volunteer</h2>
                    <form onSubmit={handleSubmit} className="form">
                        <FormControl style={{ marginBottom: '10px' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-name">Full Name</InputLabel>
                            <Input
                                name="name"
                                id="standard-adornment-name"
                                type="text"
                                required
                            />
                        </FormControl>
                        <FormControl style={{ marginBottom: '10px' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                            <Input
                                name="email"
                                id="standard-adornment-email"
                                type="email"
                                required
                            />
                        </FormControl>
                        <FormControl style={{ marginBottom: '10px' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                name="password"
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl style={{ marginBottom: '10px' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-date">Date</InputLabel>
                            <Input
                                name="date"
                                id="standard-adornment-date"
                                type="text"
                                required
                                value={formatDate}
                            />
                        </FormControl>
                        <button className="form-btn">Registration</button>
                    </form>
                    <p className="have-an-account">Already have an account? <Link to={'/login'}>Please Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Register;