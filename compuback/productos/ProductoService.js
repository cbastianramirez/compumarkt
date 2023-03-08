const mongoDriver = require("./mongo.js")


const productosGet = async () =>{
    const { collection, client } = await getConexion()
    const productos = await collection.find({}).toArray()
    await mongoDriver.closeClientExport(client)
    return productos
}


const productosSet = async (productos) =>{
    const { collection, client } = await getConexion()
    await collection.insertMany(productos)
    await mongoDriver.closeClientExport(client)
    return await productosGet()
}

// -------------------------------------------------------------------------

const productosUpdate = async (id, query) =>{
    const { collection, client } = await getConexion()
    await collection.updateOne({"_id":id},{"$set":{
        "nombre":       query.nombre,
        "precio":       query.precio,
        "fabricante":   query.fabricante,
        "modelo":       query.modelo,
        "descripcion":  query.descripcion}})
    await mongoDriver.closeClientExport(client)
    return await productosGet()
}

// ------------------------------------------------------------------------- Manejo de Stock

const stock = async (unidades, idproducto)=>{
    const { collection, client } = await getConexion()
    await collection.updateOne({"_id":idproducto},{"$set":{"stock":unidades.stock}})
    await mongoDriver.closeClientExport(client)
    return await productosGet()
}


// -------------------------------------------------------------------------


const productosDelete = async (id) =>{
    const { collection, client } = await getConexion()
    
    await collection.deleteOne({"_id":id})
    .then(
        (respuesta) => {
            console.log('Se eliminó el producto con id: ' + id)
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

    return await productosGet()
}

const productosgetid = async (id) =>{
    var productoEncontrado = null
    const { collection, client } = await getConexion()
    await collection.findOne({"_id":id}).then(
        (respuesta) =>{
            productoEncontrado = respuesta
        }
    )
    await mongoDriver.closeClientExport(client)
    return productoEncontrado
}

// -------------------------------------------------------------------------
const productosGetDisponibles = async () =>{
    const { collection, client } = await getConexion()
    const productos = await collection.find({}).toArray()
    var productos_disp=new Array()
    productos.forEach(element => {
        if(element.stock >0){productos_disp.push(element)}
    });
    await mongoDriver.closeClientExport(client)
    return productos_disp
}


async function getConexion() {
    const DBname = "compumark_t"
    const client = await mongoDriver.getClientnExport(DBname)
    const collection = await mongoDriver.getCollectionExport(client, DBname)
    return { collection, client }
}

module.exports.productosgetExport = productosGet;
module.exports.productosSetExport = productosSet;
module.exports.productosDeleteExport = productosDelete;
module.exports.productosgetidExport = productosgetid;
module.exports.stockExport = stock;
module.exports.productosUpdateExport = productosUpdate;
module.exports.productosGetDisponiblesExport=productosGetDisponibles;


