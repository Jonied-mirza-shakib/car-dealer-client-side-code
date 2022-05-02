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
import Footer from './Component/Footer/Footer';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory/:carsId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/update/:updateId' element={<UpdateData></UpdateData>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
