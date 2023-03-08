const mongoDriver = require("./mongo.js")


const usuariosGet = async () =>{
    const { collection, client } = await getConexion()
    const usuarios = await collection.find({}).toArray()
    await mongoDriver.closeClientExport(client)
    return usuarios
}

const usuariosSet = async (usuarios) =>{
    const { collection, client } = await getConexion()
    await collection.insertMany(usuarios)
    await mongoDriver.closeClientExport(client)
    return await usuariosGet()
}

// -------------------------------------------------------------------------

const usuariosUpdate = async (id, query) =>{
    const { collection, client } = await getConexion()
    await collection.updateOne({"_id":id},{"$set":{
        "nombre":       query.nombre,
        "apellidos":       query.apellidos,
        "email":   query.email,
        "contraseña":       query.contraseña,
        "telefono":  query.telefono,
        "direccion":   query.direccion,
        "ciudad":       query.ciudad,
        "departamento":  query.departamento
    }})
    await mongoDriver.closeClientExport(client)
    return await usuariosGet()
}
// -------------------------------------------------------------------------


const usuariosDelete = async (id) =>{
    const { collection, client } = await getConexion()
    
    await collection.deleteOne({"_id":id})
    .then(
        (respuesta) => {
            console.log('Se eliminó el usuario con id: ' + id)
        }
    )
    .catch(
        (error)=>{
            console.log('Error en el proceso de eliminación')
        }
    )
    const usuarios = await collection.find({}).toArray()
    console.log(usuarios)
    await mongoDriver.closeClientExport(client)

    return await usuariosGet()
}

const usuariosgetid = async (id) =>{
    var usuarioEncontrado = null
    const { collection, client } = await getConexion()
    await collection.findOne({"_id":id}).then(
        (respuesta) =>{
            usuarioEncontrado = respuesta
        }
    )
    await mongoDriver.closeClientExport(client)
    return usuarioEncontrado
}

// ------------------------------------------------------------------------- 

async function getConexion() {
    const DBname = "compumark_t"
    const client = await mongoDriver.getClientnExport(DBname)
    const collection = await mongoDriver.getCollectionExport(client, DBname)
    return { collection, client }
}

module.exports.usuariosgetExport = usuariosGet;
module.exports.usuariosSetExport = usuariosSet;
module.exports.usuariosDeleteExport = usuariosDelete;
module.exports.usuariosgetidExport = usuariosgetid;
module.exports.usuariosUpdateExport = usuariosUpdate;


