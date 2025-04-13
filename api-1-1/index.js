const express = require("express");
const cors = require("cors");
const PORT = 3000;

// Inicializamos el servidor
const app = express();

// Cargamos los middlewares
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({message:"Servidor 1-1"})
})

// Arrancamos el servicio
app.listen(PORT,()=>{
    console.log("SERVIDOR CORRIENDO EN EL PUERTO http://localhost:" + PORT);
})
