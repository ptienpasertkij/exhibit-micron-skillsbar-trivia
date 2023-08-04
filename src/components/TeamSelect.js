import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TeamSelect = ({ setTeam }) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: '66vw',
            height: '200px',
            // backgroundColor: 'red'
            gap: '20px',
        }}>
            <Typography variant="h4" component="h1" gutterBottom textAlign={'center'}>
                Select a Team
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    gap: '50px'
                }}

            >
                <Box sx={{
                    flexGrow: 1,
                    border: '5px solid blue',
                    borderRadius: '20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
                    onClick={() => {
                        setTeam('blue_team');
                    }}>
                    <Typography variant="h4" component="h1" gutterBottom textAlign={'center'}>
                        Blue Team
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        border: '5px solid red',
                        borderRadius: '20px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        setTeam('red_team');
                    }}>
                    <Typography variant="h4" component="h1" gutterBottom textAlign={'center'}>
                        Red Team
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
};

TeamSelect.propTypes = {
    setTeam: PropTypes.func.isRequired,
};

export default TeamSelect;