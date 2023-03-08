
const mongoDriver = require("./mongo.js") 
const ObjectId = require('mongodb').ObjectId;
let request = require("axios")

const pagosGet = async () => {
    const { collection, client } = await getConexion()

    const pagos = collection.find({})
    const pagosList = await pagos.toArray() 

    await mongoDriver.closeClientExport(client) 
         
    return pagosList
     // sumatoria de todos los pagos 
}

const pagosSet = async (pago) => {  
    const { collection, client } = await getConexion()

    if (pago.estado == "Aprobado"){
        const reserva = request.patch(
            "localhost:8084/carrito/estado",
            {"idcarrito":pago.idcarrito, "estadoCarrito":"Transacción confirmada"}
        ).then(
            console.log("pago confirmado")
        )
    }
    await collection.insertOne(pago).then(       
        (resp) => {
            console.log(resp)
            console.log("Pago Registrado")
        }
    )
    await mongoDriver.closeClientExport(client)      
    return pago
}

const pagosDelete = async (id) => {
    const { collection, client } = await getConexion()
    console.log(pagos)
    const idcarrito = new ObjectId(id);
    console.log(id)
    await collection.deleteOne({"_id":idcarrito})
    .then(
        (respuesta) => {
            console.log(respuesta)
            console.log('Se eliminó con id: ' + id)
        }
    )
    .catch(
        (error)=>{
            console.log(error)
            console.log('Error en el proceso de eliminación')
        }
    )
    const pagos = await collection.find({}).toArray()
    console.log(pagos)
    
    await mongoDriver.closeClientExport(client)
    return pagos
}

const pagosGetId = async (idclient) => { 
    const { collection, client } = await getConexion()

    const pagos = collection.find({"idclient":idclient})
    const pagosList = await pagos.toArray() 

    await mongoDriver.closeClientExport(client) 
         
    return pagosList
} // Es posible saber el valor total de la compra.
// Al finalizar la compra se actualizan las existencias de un producto




//_____________________________________________

async function getConexion() {
    const DBname = "compumark_t"
    const client = await mongoDriver.getClientnExport(DBname)
    const collection = await mongoDriver.getCollectionExport(client, DBname)
    return { collection, client }
} 

module.exports.pagosgetExport = pagosGet;         
module.exports.pagosSetExport = pagosSet; 
module.exports.pagosDeleteExport = pagosDelete; 

module.exports.pagosgetidExport = pagosGetId;