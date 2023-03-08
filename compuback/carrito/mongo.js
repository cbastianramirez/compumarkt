const {MongoClient} = require("mongodb")

const getClient = async (DBname) =>{
    const url ="mongodb+srv://topdevelopers:t0pd3v3l0p3rs@cluster1.fpv4qog.mongodb.net/"+DBname

    const client = new MongoClient(url)
    await client.connect()
    .then(
        (db)=>{
            console.log("Conexion exitosa")
        }
    )
    .catch(
        (error)=>{
            console.log("Error al conectarse a la bd")
        }
    )

    return client

}

const getCollection = async (client, DBname) =>{

    const db = client.db(DBname)

    const collection = await db.collection("carrito")

    return collection
}

const closeClient = async (client)=>{
    console.log("Cerrado")
    await client.close()

}

module.exports.getCollectionExport = getCollection;
module.exports.getClientnExport = getClient;
module.exports.closeClientExport = closeClient;