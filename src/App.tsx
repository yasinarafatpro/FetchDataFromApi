import React from 'react';
import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { ViewCountry } from './pages/ViewCountry';

const App:React.FC=()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ViewCountry/:countryName' element={<ViewCountry/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
