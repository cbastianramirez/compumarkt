
const mongoDriver = require("./mongo.js")
let request = require("axios")  

//Obtener todos los carritos

const carritoGetAll = async () => {
    const { collection, client } = await getConexion()
    const carrito = await collection.find({}) 
    const carritoList = await carrito.toArray()  
    await mongoDriver.closeClientExport(client)

    return  carritoList

}

//Obtener carrito por usuario

const carritoGet = async (id_usuario) => {
    const { collection, client } = await getConexion()
    const carrito = await collection.find({"id_usuario":id_usuario}) 
    const carritoList = await carrito.toArray()  
    await mongoDriver.closeClientExport(client)
    return  carritoList
}

//Agregar Carrito - Usar solamente para crear el carrito cuando se cree el usuario.

const carritoSet= async (carrito) =>{
    const {collection, client}=await getConexion()
    await collection.insertOne(carrito).then(
        (resultado)=>{
            console.log(resultado)
        }
    )

    await mongoDriver.closeClientExport(client)
    return carrito
    
}


// Usar solamente cuando se borre el usuario

const carritoDelete = async (id_usuario) =>{
    const { collection, client } = await getConexion()
    
    await collection.deleteOne({"id_usuario":id})
    .then(
        (respuesta) => {
            console.log('Se eliminó el carrito del usuario con id: ' + id)
        }
    )
    .catch(
        (error)=>{
            console.log('Error en el proceso de eliminación')
        }
    )
    const productos = await collection.find({}).toArray()
    console.log(productos)
    await mongoDriver.closeClientExport(client)
    return await carritoGetAll()
}

// Agregar productos al carrito

const carritoAgregarProducto=async(id_usuario, id_producto)=>{
    const { collection, client } = await getConexion()
    console.log('holi agregando'+id_usuario+id_producto)  
    const carrito = await collection.findOneAndUpdate({"id_usuario":id_usuario, "productos.id_producto":id_producto},
                                {$inc:{"productos.$.cantidad":1}}
                            )
    const carrito_1=carrito.value
    if (!carrito_1){
        await collection.update({"id_usuario":id_usuario},
                                 {$addToSet:{"productos":{"id_producto":id_producto,"cantidad":1}}})
    }
    const carrito_2=await carritoGet(id_usuario)
    const subtotal_calc=await calcularCostoCarrito(carrito_2[0])
    console.log(subtotal_calc)  
    await collection.updateOne({"id_usuario":id_usuario},{$set:{"subtotal":subtotal_calc,"subtotal_calculado":true}})
    const carrito_3 = await carritoGet(id_usuario)
    await mongoDriver.closeClientExport(client)   
    return   (carrito_3)           
    }
        
// Eliminar productos del carrito
const carritoEliminarProducto=async(id_usuario, id_producto)=>{
    const { collection, client } = await getConexion()
    console.log('holi borrando'+id_usuario+id_producto)
    const carrito = await collection.findOneAndUpdate({"id_usuario":id_usuario, "productos.id_producto":id_producto},
                                {$inc:{"productos.$.cantidad":-1}}
                            )
    const carrito_1=carrito.value 
    if (carrito_1 !==null){
        console.log("eliminando  0")
        await collection.update({"id_usuario":id_usuario},{$pull:{"productos":{"id_producto":id_producto,"cantidad":0}}})      
    }
    const carrito_2=await carritoGet(id_usuario)
    const subtotal_calc=await calcularCostoCarrito(carrito_2[0])
    console.log(subtotal_calc)  
    await collection.updateOne({"id_usuario":id_usuario},{$set:{"subtotal":subtotal_calc,"subtotal_calculado":true}})
    const carrito_3 = await carritoGet(id_usuario)
    await mongoDriver.closeClientExport(client)   
    return   (carrito_3)      
}   

const calcularCostoCarrito=async(carrito)=>{
    console.log("Calculando")
    //console.log(carrito)
    const productos=await carrito.productos
    console.log(productos)
    let precios=new Array()
    let cantidades=new Array()
    for(prod of productos){
        let producto=prod.id_producto
        console.log(producto)
        const producto_detalis= await request.get("http://localhost:8081/productos/id?id="+producto)
        console.log(producto_detalis.data.precio)
        precios.push(producto_detalis.data.precio)
        cantidades.push(prod.cantidad)
    }
    console.log(precios)
    console.log(cantidades)
    let subtotal=0
    for(let i=0;i<precios.length;i++){
        subtotal += precios[i]*cantidades[i]
    }
    //console.log(subtotal)
    return subtotal
}





const carritoPendientesIdget = async (idusuario) => {
    const { collection, client } = await getConexion()
    const carritousuario = await collection.find({"estado":"pendiente","idusuario": idusuario}) 
    const carritousuarioList = await carritousuario.toArray()
    
    await mongoDriver.closeusuarioxport(client)
    return carritousuarioList
}

const setEstadocarrito = async (carritoPago) => { 
    const { collection, client } = await getConexion()
    console.log("1:"+carritoPago._id+"---2:"+carritoPago.estado)
    await collection.updateOne({"_id":carritoPago._id},{"$set":{"estado":carritoPago.estado}}) 
    
    await mongoDriver.closeusuarioxport(client)
    return await carritoGetAll()
}

//no funciona
const carritoACancelar = async () => {     
    const { collection, client } = await getConexion()

    const carritoCanceladas_0 = await collection.find({"estado":"pendiente"})
    const carritoCanceladas = await carritoCanceladas_0.toArray()  
    /*await carritoCanceladas.forEach(
        async (carrito) => { 
            await request.patch( 
                "http://localhost:8081/productos/stock/?id=" + carrito.idproducto,
                carrito.stock                                   
            ).then(
                async () => {
                    await collection.updateOne({"_id":carrito._id}, {"$set":{"estado":"cancelada"}})  
                }
            )
                }
            );  */
    await mongoDriver.closeusuarioxport(client)
    return carritoCanceladas

}
const setProductoCarrito = async (id_carrito, id_producto) => { 
    const { collection, client } = await getConexion()
    //console.log("1:"+carritoPago._id+"---2:"+carritoPago.estado)
    //await collection.updateOne({"_id":carritoPago._id},{"$set":{"estado":carritoPago.estado}}) 
    const carrito_agregar=await collection.find({"_id":id_carrito}).toArray()
    await mongoDriver.closeusuarioxport(client)
    return carrito_agregar
}


// -------------------------------------------------------------------------

async function getConexion() {
    const DBname = "compumark_t"
    const client = await mongoDriver.getClientnExport(DBname)
    const collection = await mongoDriver.getCollectionExport(client, DBname)
    return { collection, client }
}


module.exports.carritogetExport = carritoGet;         
module.exports.carritogetAllExport = carritoGetAll;         
module.exports.carritoSetExport = carritoSet; 
module.exports.carritoDeleteExport = carritoDelete;
module.exports.carritoAgregarProductoExport=carritoAgregarProducto;
module.exports.carritoEliminarProductoExport=carritoEliminarProducto;
module.exports.calcularCostoCarritoExport=calcularCostoCarrito;


 
module.exports.carritoPendientesIdgetExport = carritoPendientesIdget;

module.exports.setEstadocarritoExport = setEstadocarrito;
module.exports.carritoACancelarExport = carritoACancelar;
module.exports.setProductoCarritoExport=setProductoCarrito;
