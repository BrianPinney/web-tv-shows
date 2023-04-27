import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './scenes/Home';
import Signup from './scenes/Signup';
import AddShow from './scenes/AddShow';
import Login from './scenes/Login';
import './styles/App.css';
import { useState } from 'react';

function App() {

const [shows, setShows] = useState()
const [user, setUser] = useState()

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home shows={shows} setShows={setShows}/>} />
    <Route path='/signup' element={<Signup setUser={setUser}/>} />
    <Route path='/addshow' element={<AddShow setShows={setShows}/>} />
    <Route path='/login' element={<Login setUser={setUser} />} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
