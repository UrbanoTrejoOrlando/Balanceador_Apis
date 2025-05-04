// Inicializar el servidor de express
const express = require("express");
// Inicializar cots
const cors = require("cors");
// Elegir el puerto por el cual se va ejecutar la api 
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
    // Mensaje que aparecera en la consola
    console.log("Servidor correindo en el puerto http://localhost:" + PORT);
})
