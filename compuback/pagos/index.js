const express = require("express")
const cors = require("cors")
const body_parser = require("body-parser")
const path = require("path")
const pagosService = require("./PagoService.js")

const app = express()
const port = 8083

app.use(cors()) 
app.use(body_parser.json())

const pathName = "/pagos";

app.get(pathName,       
    async (req, res) => {
        console.log(req,res)
        console.log("Recibimos petición")  
        res.send(await pagosService.pagosgetExport())
    }
)

app.get(pathName+"/id",
    async (req, res)=>{
        console.log("Recibimos peticion")
        let id = req.query.id
        console.log(id)
        res.send(await pagosService.pagosgetidExport(id))
    }
)

app.post(pathName,
    async (req, res) => {
        console.log("Recibimos petición") 
        console.log(req.body) 
        let pagos = await pagosService.pagosSetExport(req.body) 
        res.send({"mensaje": "confirmación del pago", "pagos":pagos})
    }
)

app.delete(pathName+"/:id",
    async (req, res) => {
        console.log("Recibimos peticion")
        let id = req.params.id
        console.log(id)
        let pagos = await pagosService.pagosDeleteExport(id)
        res.send({"mensaje": "el pago fue cancelado", "pagos":pagos})
    }
)

app.listen(port,
    () => {
        console.log("Subio el app en el puerto" + port)
    }
)