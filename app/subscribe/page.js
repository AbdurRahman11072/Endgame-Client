'use clint'
import SubscribePage from "@/components/Subscribe/SubscribePage";
import ProtectedRoute from "@/utils/ProtectedRoute";
import { Box, Typography } from "@mui/material";

const SubscribeUser = () => {


    return (
        <ProtectedRoute>
            
        <Box sx={{ textAlign: 'center', maxWidth: '1280px', margin: 'auto' }}>
            <Typography sx={{ color: 'white', fontSize: '40px' }}>CHOOSE A PLAN </Typography>
            <Typography sx={{ color: 'white' }}>AND ENJOY ALL VIDEO PREMIUM CONTENTS</Typography>
        <SubscribePage/>
        </Box>
        </ProtectedRoute>
       
    );
};

export default SubscribeUser;


 