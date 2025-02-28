const express = require("express");
const cors = require("cors");
const { connectDB } = require("./data/config");
const PORT = 4000;
const usersRoutes = require("./Routes/usersRoutes")

// Crear la instacia del servidor
const app = express();
app.use(cors());
app.use(express.json());

//Hacer la conexión a la BD
connectDB();

//EXPORTAR LAS RUTAS DE ENDPOINTS
app.use("/usr", usersRoutes);

//Defibir la escucha
app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});

//Definir la primera ruta
app.get('/',(req,res)=>{
    res.json({msj: "Hola desde express usando json"})
});