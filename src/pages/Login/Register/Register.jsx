import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import './Register.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../../assets/logos/logo.png';
import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [selectVolunteer, setSelectVolunteer] = useState('');
    const date = new Date()
    const formatDate = format(date, 'PP');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { data: volunteers = [], isLoading } = useQuery({
        queryKey: ['volunteers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/volunteers`)
            const data = await res.json()
            return data;
        }
    });

    const handleChange = (event) => {
        setSelectVolunteer(event.target.value);
    };

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

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name);
                saveUserDatabase(name, email, date);
                form.reset();
                swal({
                    title: "User Registration Successful!",
                    text: `Welcome - ${name}`,
                    icon: "success",
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                swal({
                    title: "Oops!",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try Again",
                });
            })
    };

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => {
                swal({
                    title: "Oops!",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try Again",
                });
            })
    };

    const saveUserDatabase = (name, email, date) => {
        const userInfo = {
            name,
            email,
            date,
            volunteer: selectVolunteer
        };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

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
                            <InputLabel id="demo-simple-select-standard-label">Select Volunteer</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                onChange={handleChange}
                            >
                                {
                                    volunteers?.map(volunteer => <MenuItem
                                        key={volunteer._id}
                                        value={volunteer.title}
                                    >
                                        {volunteer.title}
                                    </MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <FormControl style={{ marginBottom: '10px' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                name="password"
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                required
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