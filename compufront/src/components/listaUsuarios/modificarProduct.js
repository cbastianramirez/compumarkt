import Button from 'react-bootstrap/Button';
import datosUsuarioJson from "./Product.json";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';




const  ModificarProducts = () => 
    {
      const productoModificadoJson = JSON.parse(localStorage.getItem("productoModificado"))
        let productModificado = false
      
        const [newProducto, setNewProducto] = useState(datosUsuarioJson); 

      const modificarDescripcion = (descripcionp) => {  
        setNewProducto({descripcion:descripcionp, nombre:newProducto.nombre, precio:newProducto.precio, stock:newProducto.stock})
      }

      const modificarPrecio = (preciop) => {  
        setNewProducto({precio:preciop, nombre:newProducto.nombre, descripcion:newProducto.descripcion, stock:newProducto.stock})
      }

      const modificarStock = (stockp) => {  
        setNewProducto({stock:stockp, nombre:newProducto.nombre, precio:newProducto.precio, descripcion:newProducto.descripcion})
      }

      const editar = (e) => {
        const datosProducto = JSON.parse(localStorage.getItem("productos"))
        for(let i = 0; i < datosProducto.length; i++){
          if(datosProducto[i].nombre === newProducto.nombre){ 
              datosProducto[i].descripcion = newProducto.descripcion
              datosProducto[i].precio = newProducto.precio 
              datosProducto[i].stock = newProducto.stock 
          }
        }
      
        localStorage.setItem("producto", JSON.stringify(datosProducto)) 
        localStorage.setItem("productoModificado",JSON.stringify(newProducto))
        productModificado = true
    
        alert("Producto editado")
        e.target.form.elements.nombrenewinput.value = "";  
        e.target.form.elements.descripcionnewinput.value = ""; 
        e.target.form.elements.precionewinput.value = "";
        e.target.form.elements.stocknewinput.value = "";
      }

      return (
        <>
        <div>
          {
              productModificado ? <p>Producto Editado!! bravo</p> :
              <Form onSubmit = { 
                (e) => {
                  editar(e)
                }
              }>
              <Table striped responsive="md" >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Precio</th>
                      <th>Stock</th>
                      <th>Img</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                          <Form.Control
                            type="text" 
                            placeholder="Name"
                            aria-label="date"
                            aria-describedby="basic-addon1"
                            defaultValue={newProducto.nombre}
                            disabled
                            />
                          </InputGroup>
                        </td>
                        <td>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon2">Descripción</InputGroup.Text>
                            <Form.Control
                              placeholder="Descripción"
                              aria-label="descripcion"
                              aria-describedby="basic-addon2"
                              defaultValue={newProducto.descripcion}
                              onChange = { 
                                (e) => {modificarDescripcion(e.target.value)} 
                              }
                            />
                          </InputGroup>
                        </td>
                        <td>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">Precio</InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="precio"
                              aria-label="valor"
                              aria-describedby="basic-addon3"
                              defaultValue={newProducto.precio}
                              onChange = {
                                (e) => {modificarPrecio(e.target.valor)}
                              }
                            />
                          </InputGroup>
                        </td>
                        <td>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">Stock</InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="stock"
                              aria-label="valor"
                              aria-describedby="basic-addon3"
                              defaultValue={newProducto.stock}
                              onChange = {
                                (e) => {modificarStock(e.target.valor)}
                              }
                            />
                          </InputGroup>
                        </td>
                        <td>
                          <InputGroup className="mb-3">
                            {/* <InputGroup.Text ></InputGroup.Text> */}
                              <img src='./imagenes/Hyper-fury.png'>
                              </img>
                          </InputGroup>
                        </td>
                        <td>
                          <Button variant="outline-warning" type = "submit"
                            >Editar
                          </Button>
                        </td>
                    </tr>
                  </tbody>
                </ Table>
              </Form>
            }
        <Pagination/>
      </div>
      </>
      
      )
    }
;
export default ModificarProducts; 
