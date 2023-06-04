import Box from '@mui/material/Box'
import React from 'react'
import './App.css'
import SideMenu from './components/SideMenu'

const App = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu></SideMenu>
        </Box>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    )
}

export default App
