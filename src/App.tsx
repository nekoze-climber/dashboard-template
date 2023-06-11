import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import './App.css'
import DrawerHeader from './components/DrawerHeader'
import MiniVariantDrawer from './components/MiniVariantDrawer'
import { Routes, Route, Navigate } from 'react-router-dom'
import MapComponent from './components/MapComponent'
import CarComponent from './components/CarComponent'
import DirectionComponent from './components/DirectionComponent'

const App = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <MiniVariantDrawer></MiniVariantDrawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Routes>
                    <Route path="/" element={<Navigate to="map" />}></Route>
                    <Route path="map" element={<MapComponent />}></Route>
                    <Route path="car" element={<CarComponent />}></Route>
                    <Route path="direction" element={<DirectionComponent />}></Route>
                    <Route path="*" element={<Navigate to="/" replace />}></Route>
                </Routes>
            </Box>
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
