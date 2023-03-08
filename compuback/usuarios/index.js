const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const ususarioService = require("./UsuarioService.js")

const app = express()
const port = 8082


app.use(cors())
app.use(body_parse.json())

const pathName="/usuarios"


app.get(pathName,
    async (req, res)=>{
        console.log("Recibimos peticion")
        res.send(await ususarioService.usuariosgetExport())
    }
)


app.get(pathName+"/:id",

       async (req, res)=>{
            console.log("Recibimos peticion")
            let id = req.params.id
            console.log(id)
            res.send(await ususarioService.usuariosgetidExport(id))
        }
    )


app.post(pathName,
    async (req, res)=>{
        console.log("Recibimos peticion")
        console.log(req.body)
        let ususarios = await ususarioService.usuariosSetExport(req.body)
        res.send({"mensaje":"ususario Guardado","ususarios":ususarios})
    }
)

app.delete(pathName+"/:id",
    async (req, res)=>{
        console.log("Recibimos peticion")

        let id = req.params.id

        console.log(id)

        let ususarios = await ususarioService.usuariosDeleteExport(id)

        res.send({"mensaje":"ususario Eliminado","ususarios":ususarios})
    }
)


app.patch(pathName+"/:id",
    async (req, res)=>{
        console.log("Recibimos peticion de actualización")
        console.log(req.body)
        const query = req.body
        const id = req.params.id
        console.log(id)
        let ususarios = await ususarioService.usuariosUpdateExport(id, query)
        res.send({"mensaje":"Ususario guardado","ususarios":ususarios})
    }
)


app.listen(port, 
    ()=>{
        console.log("La app USUARIOS inició en el puerto " + port)
    }
)