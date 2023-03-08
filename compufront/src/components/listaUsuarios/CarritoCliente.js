import Button from 'react-bootstrap/Button';
import datosUsuarioJson from "./Product.json";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from './Pagination.js';

const  Carrito = () => 
  {
    const productoModificadoJson = JSON.parse(localStorage.getItem("productoModificado"))
      let productModificado = false
      const [newProducto, setNewProducto] = useState(localStorage.getItem(productoModificadoJson));
   
      const add = (e) => {
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
          <div id="carrito">
            <div class="container-md p-1">
              <div class="row pt-5">
                <h3 class="text-center pb-5 pt-5 h1 text-shadow">Carrito de compras cliente</h3>
              </div>
              
              <div id="carrito">
            <div class="row">
              <div class="col-sm"> 
                  <div class="card w-100-card-border btn-outliner-primary mb-5" id="tarjetas">
                    <div class="card-body">
                      <h3>Patriot</h3>
                      <p id="card-text">Producto </p>
                      <div className='rating-outer'>
                        <div className="rating-inner" >
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="./imagenes/patriot.png"></img>
                      <p id="card-text">Valor</p>
                      <div className="stockCounter d-inline"> 
                      <p id="card-text">$ 5000</p>
                      
                    </div>
                            
                    <button type="button" id="carrito_btn" className="btn btn-outline-success d-inline ml-4" >
                      Comprar
                    </button>
                                
                    <h4 className="mt-2">Descripción:</h4>
                    <p>Producto con gran experiencia en el mercado</p>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                                
                    <h5 className="mt-2">Stock:</h5>
                    <span className="btn btn-outline-warning minus" onClick="{decreaseQty}">-</span>
                    <span className="btn btn-outline-primary plus" onClick="{increaseQty}">+</span>
                                
                    <p id="card-text">Vendido por: <strong></strong></p>
                  </div>
                </div>
              </div>

              <div class="col-sm"> 
                  <div class="card w-100-card-border btn-outliner-primary mb-5" id="tarjetas">
                    <div class="card-body">
                      <h3>Asus</h3>
                      <p id="card-text">Producto </p>
                      <div className='rating-outer'>
                        <div className="rating-inner" >
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="./imagenes/Adata.png"></img>
                      <p id="card-text">Valor</p>
                      <div className="stockCounter d-inline">
                      <p id="card-text">$ 5000</p>
                      
                    </div>
                            
                    <button type="button" id="carrito_btn" className="btn btn-outline-success d-inline ml-4" >
                      Comprar
                    </button>
                                
                    <h4 className="mt-2">Descripción:</h4>
                    <p>Producto con gran experiencia en el mercado</p>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>

                                
                    <h5 className="mt-2">Stock:</h5>
                    <span className="btn btn-outline-warning minus" onClick="{decreaseQty}">-</span>
                    <span className="btn btn-outline-primary plus" onClick="{increaseQty}">+</span>
                                
                    <p id="vendedor">Vendido por: <strong></strong></p>
                  </div>
                </div>
              </div>

              <div class="col-sm"> 
                  <div class="card w-100-card-border btn-outliner-primary mb-5" id="tarjetas">
                    <div class="card-body">
                      <h3>Hyper - Fury</h3>
                      <p id="card-text">Producto </p>
                      <div className='rating-outer'>
                        <div className="rating-inner" >
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="./imagenes/Hyper-fury.png"></img>
                      <p id="card-text">Valor</p>
                      <div className="stockCounter d-inline">
                      <p id="card-text">$ 5000</p>
                      
                    </div>
                            
                    <button type="button" id="carrito_btn" className="btn btn-outline-success d-inline ml-4" >
                      Comprar
                    </button>
                                
                    <h4 className="mt-2">Descripción:</h4>
                    <p>Producto con gran experiencia en el mercado</p>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                                
                    <h5 className="mt-2">Stock:</h5>
                    <span className="btn btn-outline-warning minus" onClick="{decreaseQty}">-</span>
                    <span className="btn btn-outline-primary plus" onClick="{increaseQty}">+</span>
                                
                    <p id="card-text">Vendido por: </p>
                  </div>
                </div>
              </div>            
            </div>
          </div>
        </div>
        <Pagination/>
      </div>
    </> 
  )
  }
  ;
export default Carrito;

