
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componenets/Header/Header';
import Inventory from './Componenets/Inventory/Inventory';
import Orders from './Componenets/Orders/Orders';
import Shop from './Componenets/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Shop></Shop>}>
        
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>

        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
