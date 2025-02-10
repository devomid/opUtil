import { createTheme, extendTheme } from '@mui/joy/styles';
import './App.css'

const theme = extendTheme({
    typography: {
        fontFamily: {
            default: 'ATT, sans-serif',
            Button: {
                fontFamily: 'ATT, sans-serif',
            },
        },
    },
});

export default theme;