// Inicializar el servidor de express
const express = require("express");
const cors = require("cors");
const PORT = 4001;

// Inicializamos el servidor
const app = express();

// Cargamos los middlewares
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({message:"Servidor 2-2"})
})

// Arrancamos el servicio
app.listen(PORT,()=>{
    console.log("SERVIDOR CORRIENDO EN EL PUERTO http://localhost:" + PORT);
})
