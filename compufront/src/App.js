import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/listaUsuarios/Footer';
import {Fragment} from 'react'; 
import {Routes, Route, BrowserRouter, Link} from "react-router-dom"; 
import Autorizacion from './Autorizacion.js';
import Carrito from './components/listaUsuarios/CarritoCliente.js';
import Container from 'react-bootstrap/Container';
import datosProductoJson from './components/listaUsuarios/Product.json';
import Header from './components/listaUsuarios/Header.js';
import Home from './components/listaUsuarios/home';
import ListaProductos from './components/listaUsuarios/ListaProductos.js';
import ModificarProducts from './components/listaUsuarios/modificarProduct.js';
import Nav from 'react-bootstrap/Nav';
import ProductoCliente from './components/listaUsuarios/ProductoCliente.js';
import VentasAdmin from './components/listaUsuarios/ventasAdmin.js';

//Icons
import { House } from 'react-bootstrap-icons';
import { Receipt } from 'react-bootstrap-icons';
import { Motherboard } from 'react-bootstrap-icons';
import { CardList } from 'react-bootstrap-icons';
import { Basket } from 'react-bootstrap-icons';
import { Key } from 'react-bootstrap-icons';




function App() {
  if(localStorage.getItem("productos") == null){ 
    
    localStorage.setItem("productos", JSON.stringify(datosProductoJson))
    

  }
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Nav justify variant="tabs" defaultActiveKey="/home">
       {/* <Nav.Item>
        <Nav.Link href="/home"><House />   Página de Inicio</Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link eventKey="ventas" as={Link} to="/ventas"><Receipt />   Sección de Ventas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="modificarproducto" as={Link} to="/modificarproducto"><Motherboard />   Editar Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="listaP" as={Link} to="/listaP"><CardList />   Lista de Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="carrito" as={Link} to="/Carrito"><CardList />   Cliente - Productos</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="carrito" as={Link} to="/carrito">Cliente - Carrito</Nav.Link>
      </Nav.Item> */}
      <Nav.Item>
        <Nav.Link eventKey="clienteproducto" as={Link} to="/clienteproducto"><Basket />   Carro de compras</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
      <Nav.Link eventKey="disabled" disabled><Key />   Roles</Nav.Link>
      </Nav.Item> */}
      
    </Nav>
   
        <Routes>
          <Route path='/modificarproducto' element={Autorizacion(ModificarProducts, ["USER", "ADMIN"])}/>
          <Route path='/home' element={Autorizacion(Home, ["USER", "ADMIN"])}/>
          <Route path='/ventas' element={Autorizacion(VentasAdmin, ["USER", "ADMIN"])}/>
          <Route path='/clienteproducto' element={Autorizacion(ProductoCliente, ["USER", "ADMIN"])}/>
          <Route path='/listaP' element={Autorizacion(ListaProductos, ["USER", "ADMIN"])}/>          
          <Route path='/carrito' element={Autorizacion(Carrito, ["USER", "ADMIN"])}/>

        </Routes>
         
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
