import React from 'react'
import { Box, Button, FormControl, FormControlLabel, FormGroup, FormHelperText, LinearProgress, Stack, Switch, TextField, Tooltip, Typography } from "@mui/joy";
import '../App.css';

const UtilityApps = () => {
    return (
        <Box sx={{ width: '29%', height: '98%', border: '2px solid rgb(78, 255, 255)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '98.5%', height: '98.5%', border: '2px solid rgb(78, 255, 255)', paddingX: 2, paddingY: 0.8 }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='h5' sx={{ color: 'rgb(0, 0, 151)', backgroundColor: 'rgb(78, 255, 255)', mt: -3 }} fontFamily={'sor'} fontSize={20}>
                        توضیحات فایل
                    </Typography>
                </Box>

                <Box sx={{ padding: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mt: 5 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button variant='outlined'>
                            <Typography variant='body2' sx={{ color: 'rgb(78, 255, 255)' }}>
                                Office
                            </Typography>
                        </Button>
                        <Button variant='outlined'>
                            <Typography variant='body2' sx={{ color: 'rgb(78, 255, 255)' }}>
                                WinRAR
                            </Typography>
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button variant='outlined'>
                            <Typography variant='body2' sx={{ color: 'rgb(78, 255, 255)' }}>
                                Chrome
                            </Typography>
                        </Button>
                        <Button variant='outlined'>
                            <Typography variant='body2' sx={{ color: 'rgb(78, 255, 255)' }}>
                                IDM
                            </Typography>
                        </Button>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default UtilityApps