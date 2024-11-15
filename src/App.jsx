import './App.css' ;
import { Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componant/Home/Home';
import About from './componant/About/About';
import Contact from './componant/Contact/Contact';

function App() {

  return (
    
<>

    <Routes>
    <Route path='/' element={ <Home /> } /> 
    <Route path='/About' element={<About /> } /> 
    <Route path='/Contact' element={<Contact /> } /> 
    </Routes>
    
</>
)
}

export default App ; 
