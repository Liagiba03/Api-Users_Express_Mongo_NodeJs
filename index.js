const express = require("express");
const cors = require("cors");
const PORT = 4000;

// Crear la instacia del servidor
const app = express();
app.use(cors());
app.use(express.json());

//Defibir la escucha
app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});

//Definir la primera ruta
app.get('/',(req,res)=>{
    res.json({msj: "Hola desde express usando json"})
});