const express = require("express")
const React = require("react")
const ReactDOMServer = require("react-dom/server");
const path = require("path")
const fs = require("fs")

const app = express()

const App  =  require("./frontend/src/App.jsx")

app.use(express.static(path.join(__dirname, "frontend/src")))

app.use("^/$", (req,res,next)=>{
    fs.readFile(path.resolve("./frontend/src/App.jsx"), "utf-8", (err, data) =>{
        if(err){
            console.log(err)
            return res.status(500)
        }
        return res.send(
            data.replace(
                `<div id="root"><div/>`,
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )
    })
})

app.listen(3000, ()=>{

    console.log("Listening on port 3000")
})