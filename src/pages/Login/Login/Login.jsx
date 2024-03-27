import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../../../assets/logos/logo.png';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="form-section">
            <div className="form-container">
                <Link to={'/'} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ height: '48px' }} src={logo} alt="logo" />
                </Link>
                <div className="form-part">
                    <h2 className="form-title">Login as a Volunteer</h2>
                    <form onSubmit={handleSubmit} className="form">

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


                        <button className="form-btn">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;