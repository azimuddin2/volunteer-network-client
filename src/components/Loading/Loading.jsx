import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <div style={{margin: '200px 0px'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        </div>
    );
};

export default Loading;