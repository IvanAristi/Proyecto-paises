import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateCountry from './components/CreateCountry';
import ManageCountry from './components/ManageCountry';
import Menu from './components/Menu'
import './App.css'

function App() {
  return (
    <Router>
      
       
     
        <Menu/>
       

        <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/ManageCountry" element={<ManageCountry />} />
          <Route path="/Countries" element={<Home />} />
          <Route path="/CreateCountry" element={<CreateCountry />} />
         
        </Routes>
        
     
    </Router>
  );
}

export default App;



