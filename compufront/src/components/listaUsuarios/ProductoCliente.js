// vista para q el cliente visualice productos y seleccione el producto d su preferencia (lista con preferencias) - -- colocar guardar/agregar preferencias-- una tabla q muestra lo q coloco del carrito con dos botones (FINALIZAR COMPRA Y CANCELAR)
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Table from 'react-bootstrap/esm/Table';
import cliente from './ClienteProducto.json';
import { Fragment } from 'react'; 
import React, { useState } from 'react';



const ProductoCliente = () =>
    { 
    const productoModificadoJson = JSON.parse(localStorage.getItem("productos"))
   
    const [datosProducto, setDatosProducto] = useState(cliente);

    const eliminarProducto = (id) => {
        const listaProductosNew = datosProducto.filter(
            (producto) => (producto.nombre !== id) 
        )
        setDatosProducto(listaProductosNew)
        localStorage.setItem("productos",JSON.stringify(listaProductosNew)) 
    }

    const modificarProducto= (modificarProducto) => {
      localStorage.setItem("ProductoModificado",JSON.stringify(modificarProducto))
    }
    
    return (
        <>
            <Table striped responsive="md" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Valor</th>
                        <th>Total</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        datosProducto.map(
                            (producto, index) => { 
                                return(
                                    <tr>
                                        <td>{index}</td>
                                        <td>{producto.imagen}                        
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon3"></InputGroup.Text>
                                                    <img src='./imagenes/procesadorIntel10M.png'>
                                                    
                                                    </img>
                                            </InputGroup>
                                        </td>  
                                        <td>{producto.cantidad}</td>
                                        <td>{producto.producto}</td>
                                        <td>{producto.valor}</td>
                                        <td>{producto.total}</td> 
                                        <td><Button variant="outline-success" type = "submit" onClick = {
                                                () => {
                                                    eliminarProducto(producto.nombre)
                                                }     
                                            }
                                            > Finalizar Compra
                                            </Button>    
                                            <Button variant="outline-warning" onClick = {
                                                () => {
                                                    modificarProducto(producto.nombre)
                                                }     
                                            }
                                            > Cancelar Compra
                                            </Button>   
                                        </td>
                                    </tr>
                                );
                            }
                        )
                    }          
                </tbody>
            </ Table>
        </> 
    )
}

export default ProductoCliente; 