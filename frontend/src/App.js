
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ViewEmployee/>}/>
      <Route path='/add' element={<AddEmployee/>} />
    </Routes>
    </>
  );
}

export default App;
