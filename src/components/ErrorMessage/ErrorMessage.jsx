import { Typography } from "@mui/material";

const ErrorMessage = ({ message }) => {
    return (
        <Typography
            color={'error'}
            textAlign={'center'}
        >
            error: {message}
        </Typography>
    );
};

export default ErrorMessage;