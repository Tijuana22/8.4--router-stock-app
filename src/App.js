import {Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';

import About from "./pages/About";
import Dashboard from './pages/Dashboard';
import Home from "./pages/Home";
import Stock from './pages/Stock';



function App(props) {
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path= "/dashboard/:symbol" element={<Stock {...props}/>} />
      <Route path="/dashboard" element={<Dashboard {...props}/>} />
     </Routes>  
       
    </div>
    
  );
}

export default App;
