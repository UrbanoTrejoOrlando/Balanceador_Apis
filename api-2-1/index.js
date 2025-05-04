// Inicializar el servidor de express
const express = require("express");
// Inicializar cors
const cors = require("cors");
const PORT = 4000;

// Inicializamos el servidor
const app = express();

// Cargamos los middlewares
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({message:"Servidor 2-1"})
})

// Arrancamos el servicio
app.listen(PORT,()=>{
    console.log("SERVIDOR CORRIENDO EN EL PUERTO http://localhost:" + PORT);
})
