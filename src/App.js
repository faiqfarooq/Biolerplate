import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Nopage from './Pages/Nopage';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/*' element={<Nopage/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
