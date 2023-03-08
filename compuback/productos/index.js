const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const productoService = require("./ProductoService.js")

const app = express()
const port = 8081


app.use(cors())
app.use(body_parse.json())

const pathName="/productos"


app.get(pathName,
    async (req, res)=>{
        console.log("Recibimos peticion")
        const id = req.query.id
        res.send(await productoService.productosgetExport(id))
    }
)


app.get(pathName+"/id",

       async (req, res)=>{
            console.log("Recibimos peticion")
            let id = req.query.id
            console.log(id)
            res.send(await productoService.productosgetidExport(id))
        }
    )


app.post(pathName,
    async (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        let productos = await productoService.productosSetExport(req.body)
        res.send({"mensaje":"Producto Guardado","productos":productos})
    }
)

app.delete(pathName+"/:id",
    async (req, res)=>{
        console.log("Recibimos peticion")

        let id = req.params.id

        console.log(id)

        let productos = await productoService.productosDeleteExport(id)

        res.send({"mensaje":"Producto Eliminado","productos":productos})
    }
)


app.patch(pathName+"/:id",
    async (req, res)=>{
        const id = req.params.id
        console.log(await productoService.productosgetidExport(id))
        console.log("Recibimos peticion de actualización")
        console.log(req.body)
        const query = req.body
        console.log(id)
        let productos = await productoService.productosUpdateExport(id, query)
        console.log(await productoService.productosgetidExport(id))

        res.send({"mensaje":"Producto Guardado","productos":productos})
    }
)

app.get(pathName+'/disponibles',
    async (req, res)=>{
        console.log("Recibimos peticion")        
        res.send(await productoService.productosGetDisponiblesExport())
    }
)

app.patch(pathName+"/stock/:id",

    async (req, res)=>{
        console.log("Stock")
        console.log(req.body)
        id = req.params.id
        res.send(await productoService.stockExport(req.body,id))
    }   
)

app.get(pathName+'/disponibles',
    async (req, res)=>{
        console.log("Recibimos peticion")        
        res.send(await productoService.productosGetDisponiblesExport())
    }
)


app.listen(port, 
    ()=>{
        console.log("La app Productos inició en el puerto " + port)
    }
)