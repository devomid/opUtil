import './App.css';
import theme from './theme';
import UtilityApps from './sections/utilityApps';
import HolooApps from './sections/holooApps';
import { CssVarsProvider, } from '@mui/joy/styles';


function App() {

  return (
      <div className='App' >
        <HolooApps />
        {/* <UtilityApps /> */}
      </div>

  )
}

export default App;


