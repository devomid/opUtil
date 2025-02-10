import React from 'react'
import { Box, Button, Typography } from '@mui/joy';
import SouthIcon from '@mui/icons-material/South';
import '../App.css';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';


const HolooApps = () => {
    const holooApps = ['Holoo Installer', 'BDE64', 'Fonts for Holoo', '.NET Framework', 'SQL 2008 Express x64', 'SQL 2008 Express x86', 'SQL 2008 Full', 'SQL 2014', 'EXE & Write Public', 'EXE & Write SLM',]
    const tools = ['TNC SLM Service', 'TNC Lock Service', 'Lock Tools', 'OCX Files', 'OCX Register', 'Smart Help', 'Bastan Hesab', 'Tiny x64 Driver', 'Tiny x86 Driver', 'PKZIP', 'PKZIP x64']
    const miscs = ['Anydesk', 'DorsanDesk', 'Office', 'WinRAR', 'IDM', 'Chrome', 'FireFox', 'PDF Reader', 'Orash', 'CSR Generator', 'Windows 7', 'Windows 10']

    return (
        <Box sx={{ width: '99%', height: '98%', border: '2px solid rgba(78, 255, 255)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '99%', height: '99%', border: '2px solid rgba(78, 255, 255)' }}>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='h5' sx={{ color: 'rgb(0, 0, 151)', backgroundColor: 'rgb(78, 255, 255)', mt: -2 }} fontFamily={'ATT'} fontSize={25} lineHeight={1}>
                        Holoo & Tools
                    </Typography>
                </Box>

                <Box sx={{ width: '100%', height: '100.5%', display: 'flex', }}>
                    <Box sx={{ height: '100%', width: '40%', mt: -1.9, borderRight: '2px solid rgb(78, 255, 255)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <SouthIcon sx={{ height: 20, width: 20, color: 'rgb(255, 255, 79)' }} />
                            <Typography sx={{ color: 'rgb(255, 255, 79)', ml: 1 }} fontFamily={'ATT'} fontSize={25}>
                                Holoo
                            </Typography>
                        </Box>

                        <Box>
                            {
                                holooApps.map((appName, index) => {
                                    return (
                                        <Box sx={{ width: '97%' }}>
                                            <Button fullWidth sx={{ borderRadius: 0, justifyContent: 'flex-start', m: 0.3, '&:hover': { backgroundColor: 'rgb(78, 255, 255)', '& .btn-name': { color: 'rgb(0, 0, 151)' } }, '&:active': { backgroundColor: 'rgb(20, 153, 151)', '& .btn-name': { color: 'rgb(0, 0, 0)' } } }} variant='plain' key={index} >
                                                <Typography className="btn-name" sx={{ color: 'rgb(78, 255, 255)' }} fontFamily={'ATT'} fontSize={18} letterSpacing={2}>
                                                    {appName}
                                                </Typography>
                                            </Button>
                                        </Box>
                                    )
                                })
                            }
                        </Box>

                    </Box>

                    <Box sx={{ height: '100%', width: '31%', mt: -1.9, borderRight: '2px solid rgb(78, 255, 255)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <SouthIcon sx={{ height: 20, width: 20, color: 'rgb(255, 255, 79)' }} />
                            <Typography sx={{ color: 'rgb(255, 255, 79)', ml: 1 }} fontFamily={'ATT'} fontSize={25}>
                                Tools
                            </Typography>
                        </Box>

                        <Box>
                            {
                                tools.map((appName, index) => {
                                    return (
                                        <Box sx={{ width: '97%' }}>
                                            <Button fullWidth sx={{ borderRadius: 0, justifyContent: 'flex-start', m: 0.3, '&:hover': { backgroundColor: 'rgb(78, 255, 255)', '& .btn-name': { color: 'rgb(0, 0, 151)' } }, '&:active': { backgroundColor: 'rgb(20, 153, 151)', '& .btn-name': { color: 'rgb(0, 0, 0)' } } }} variant='plain' key={index} >
                                                <Typography className="btn-name" sx={{ color: 'rgb(78, 255, 255)' }} fontFamily={'ATT'} fontSize={18} letterSpacing={1}>
                                                    {appName}
                                                </Typography>
                                            </Button>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>

                    <Box sx={{ height: '100%', width: '29%', mt: -1.4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <SouthIcon sx={{ height: 20, width: 20, color: 'rgb(255, 255, 79)' }} />
                            <Typography sx={{ color: 'rgb(255, 255, 79)', ml: 1 }} fontFamily={'ATT'} fontSize={25} >
                                Miscs
                            </Typography>
                        </Box>

                        <Box>
                            {
                                miscs.map((appName, index) => {
                                    return (
                                        <Box sx={{ width: '97%', display: 'flex', alignItems: 'center' }}>
                                            <Button fullWidth sx={{ borderRadius: 0, justifyContent: 'flex-start', m: 0.3, '&:hover': { backgroundColor: 'rgb(78, 255, 255)', '& .btn-name': { color: 'rgb(0, 0, 151)' } }, '&:active': { backgroundColor: 'rgb(20, 153, 151)', '& .btn-name': { color: 'rgb(0, 0, 0)' } } }} variant='plain' key={index} >
                                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography className="btn-name" sx={{ color: 'rgb(78, 255, 255)' }} fontFamily={'ATT'} fontSize={18} letterSpacing={1} lineHeight={1}>
                                                        {appName}
                                                    </Typography>
                                                    {
                                                        ['Windows 7', 'Windows 10'].includes(appName) ? (
                                                            <CloudQueueIcon className='btn-name' sx={{ mr: 0.5, color: 'rgb(78, 255, 255)', height: '15px', width: '15px' }} />
                                                        ) : (
                                                            null
                                                        )
                                                    }
                                                </Box>
                                            </Button>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default HolooApps
// در قسمت هلو هم مثل نرم افزارها فقط دکمه باشه و با کلیک روی اون مدال همون باز شه و اطلاعات و دانلود و فلان توی اون باشه