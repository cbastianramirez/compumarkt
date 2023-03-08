//import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import datosVentasJson from "./Ventas.json";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
//import styles from './listaUsuarios.module.css';
import Table from 'react-bootstrap/Table';
import Pagination from './Pagination.js';


const  VentasAdmin = () => 
    {
      const [datosProducto, setDatosProducto] = useState(datosVentasJson);  
      
      const [newProducto, setNewProducto] = useState({nombre:"",descripcion:"",precio:"", stock:""});

      const modificarNombre = (nombrep) => { 
        setNewProducto({nombre:nombrep, descripcion:newProducto.descripcion, precio:newProducto.precio, stock:newProducto.stock})
      }

      const modificarDescripcion = (descripcionp) => {  
        setNewProducto({descripcion:descripcionp, nombre:newProducto.nombre, precio:newProducto.precio, stock:newProducto.stock})
      }

      const modificarPrecio = (preciop) => {  
        setNewProducto({precio:preciop, nombre:newProducto.nombre, descripcion:newProducto.descripcion, stock:newProducto.stock})
      }

      const modificarStock = (stockp) => {  
        setNewProducto({stock:stockp, nombre:newProducto.nombre, precio:newProducto.precio, descripcion:newProducto.descripcion})
      }

      const eliminarProducto = (id) => {  
        const listaProductosNew = datosProducto.filter(
          (producto) => (producto.nombre !== id) // me tiene dudando
        )
        setDatosProducto(listaProductosNew)
      }

      const addProduct = (e) => { 
        setDatosProducto([...datosProducto, newProducto])
        e.target.form.elements.nombrenewinput.value = "";  
        e.target.form.elements.descripcionnewinput.value = ""; 
        e.target.form.elements.precionewinput.value = "";
        e.target.form.elements.stocknewinput.value = "";
      }

    return (
        <div>
            <Form onSubmit = { 
                (e) => {
                addProduct(e)
                }
                }>
                <Table striped responsive="md" >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>IdVenta</th>
                        <th>Valor</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                datosProducto.map(
                                    (producto, index) => { 
                                    return(
                                        <tr>
                                            <td>{index}</td>
                                            <td>{producto.fecha}</td>
                                            <td>{producto.id_venta}</td>
                                            <td>{producto.valor}</td>
                                        </tr>
                                        );
                                    }
                                )
                            }
                        </tbody>
                </ Table>
            </Form>
            <Pagination/>
        </div>
    )
    }
;

export default VentasAdmin; 
