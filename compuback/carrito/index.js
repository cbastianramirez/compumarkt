const express = require("express")
const cors = require("cors")
const body_parser = require("body-parser")
const path = require("path")
const carritoService = require("./CarritoService.js")


const app = express()
const port = 8084

app.use(cors()) 
app.use(body_parser.json())

const pathName = "/carrito";

// Obtener todos los carritos existentes

app.get(pathName,        
    async (req, res) => {
        console.log("Consulta de todos los pedidos.") 
        res.send(await carritoService.carritogetAllExport()) 
    }
)

// Obtener carrito por id de usuario
app.get(pathName +'/usuario/id',        
    async (req, res) => {
        let id = req.query.id;
        console.log("Consulta de carrito de usuario "+ id) 
        
        res.send(await carritoService.carritogetExport(id)) 
    }
)

//Agregar nuevo carrito - Usar solamente para crear el carrito cuando se cree el usuario.

app.post(pathName,
    async(req,res)=>{
        console.log('Agregando Nuevo Carrito a usuario: '+req.body.id_usuario)
        res.send(await carritoService.carritoSetExport)
    }
)

//Borrar Carrito por id_usuario - Usar solamente cuando se borre el usuario o usuario
app.delete(pathName,
    async(req,res)=>{
        let id_usuario = req.query.id_usuario
        console.log('Borrando Carrito de usuario '+id_usuario)
        res.send(await carritoService.carritoDeleteExport(id_usuario))
        
    }
)
//Agregar productos al carrito
app.patch(pathName+'/agregarproducto',
    async(req,res)=>{
        let id_usuario = req.query.id_usuario
        let id_producto=req.query.id_producto
        console.log('Agregando Productos a Carrito de usuario '+id_usuario+' Producto: '+id_producto)
        res.send(await carritoService.carritoAgregarProductoExport(id_usuario,id_producto))
    }

)

//Eliminar productos al carrito
app.patch(pathName+'/eliminarproducto',
    async(req,res)=>{
        let id_usuario = req.query.id_usuario
        let id_producto=req.query.id_producto
        console.log('Elminando Productos de Carrito de usuario '+id_usuario+' Producto: '+id_producto)
        res.send(await carritoService.carritoEliminarProductoExport(id_usuario,id_producto))
    }

)


//funcionopcional


/*

app.get(pathName + "/pendientes/",       
    async (req, res) => {
        console.log("Consulta de pedidos pendientes por ID de usuario") 
        idusuario = req.params.id
        console.log(idusuario)
        res.send(await carritoService.carritoPendientesIdgetExport(idusuario))
    }
)

//No funciona
app.get(pathName +"/cancelada",       
    async (req, res) => {
        console.log("Recibimos petición de carrito cancelado") 
        console.log("ola2")
        res.send(await carritoService.carritoACancelarExport())
    }
)

app.get(pathName +"/agregar/:id_carrito/:id_producto",       
    async (req, res) => {
        console.log("Recibimos petición de agregar producto a carrito") 
        let id_carrito= req.params.id_carrito
        console.log(id_carrito)
        let id_producto = req.params.id_producto
        console.log(id_producto)
        res.send(await carritoService.setProductoCarritoExport())
    }
)


 ///Toca revisar bien el método en CarritoService   para que actualice el stock
app.post(pathName,  
    async (req, res) => {
        console.log("Recibimos petición de pedido a carrito") 
        console.log(req.body) 
        let carrito = await carritoService.carritoSetExport(req.body) 
        res.send({"mensaje": "Se realizó pedido", "carrito":carrito})
    }
)
// ---------------------------------------------------------------

app.patch(pathName + "/estado", 
    async (req, res) => {
        console.log("Recibimos petición") 
        console.log(req.body) 
        res.send(await carritoService.setEstadocarritoExport(req.body))
    }
)


app.delete(pathName,
        async (req, res) => {
        console.log("Recibimos petición ") 
        let id = req.query.id
        console.log(id) 
        let carrito = await carritoService.carritoDeleteExport(id)
        res.send({"mensaje": "el reserva esta staging", "carrito":carrito})
    }
)
*/
app.listen(port,
    () => {
        console.log("Subio el app en el puerto "  + port)
    }
)