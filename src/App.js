import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import LogIn from './Component/LogIn/LogIn';
import SignUp from './Component/SignUp/SignUp';
import Header from './Component/Header/Header';
import ManageInventory from './Component/ManageInventory/ManageInventory';
import Inventory from './Component/Inventory/Inventory';
import AddItem from './Component/AddItem/AddItem';
import UpdateData from './Component/UpdateData/UpdateData';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory/:carsId' element={<Inventory></Inventory>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/update/:updateId' element={<UpdateData></UpdateData>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
