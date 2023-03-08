import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

import Pagination from './Pagination.js';


const ListaProductos = () =>  {
    const datosProductoJson = JSON.parse(localStorage.getItem("productos"))
   
   const [datosProducto, setDatosProducto] = useState(datosProductoJson);

    const eliminarUsuario = (id) => {
    const listaProductosNew = datosProducto.filter(
        (producto) => (producto.nombre !== id) 
      )
      setDatosProducto(listaProductosNew)
      localStorage.setItem("productos",JSON.stringify(listaProductosNew)) 
    }

    const modificarProductos= (modificarProducto) => {
      localStorage.setItem("productoModificado",JSON.stringify(modificarProducto))
    }
    
    return (
        <>
            <Carousel>
                <Carousel.Item interval={7000}>
                    <img
                    className="d-block w-100"
                    src="./imagenes/patriot.png"
                    alt="First slide"
                />
                    <Carousel.Caption>
                    <h3>Patriot</h3>
                    <p>Board</p>
                    <p>Valor: $40000</p>
                    <p>Stock: 3</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                    className="d-block w-100"
                    src="./imagenes/asus.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Asus</h3>
                    <p>Procesador</p>
                    <p>Valor: $50000</p>
                    <p>Stock: 2</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={7000}>
                    <img
                    className="d-block w-100"
                    src="./imagenes/procesadorIntel10M.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Procesador Intek 10 M</h3>
                    <p>procesadorIntel10</p>
                    <p>Valor: $50000</p>
                    <p>Stock: 1</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={7000}>
                    <img
                    className="d-block w-100"
                    src="./imagenes/AsRock.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>AsRock</h3>
                    <p>Gamers</p>
                    <p>Valor: $150000</p>
                    <p>Stock: 5</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={7000}>
                    <img
                    className="d-block w-100"
                    src="./imagenes/Hyper-fury.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Hyper-fury</h3>
                    <p>tarjeta</p>
                    <p>Valor: $60000</p>
                    <p>Stock: 5</p>
                    </Carousel.Caption>
                </Carousel.Item>
            
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='./imagenes/asus.png'
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Play</h3>
                    <p>vídeo juego</p>
                    <p>Valor: $200000</p>
                    <p>Stock: 1</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={7000}>
                    <img
                    className="d-block w-100"
                    src="./imagenes/Adata.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Adata</h3>
                    <p>tarjeta</p>
                    <p>Valor: $60000</p>
                    <p>Stock: 5</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        <Pagination/>

        </>
    );
}

export default ListaProductos;