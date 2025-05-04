// Inicializar el servidor de express
const express = require("express");
// Inicializar cors
const cors = require("cors");
// Elegir el puerto por el cual se va ejecutar la api 
const PORT = 4001;

// Inicializamos el servidor
const app = express();

// Cargamos los middlewares
app.use(express.json());
app.use(cors());

// Mensaje que aparece al ejecutar la api
app.get("/",(req,res)=>{
    res.json({message:"Servidor 2-2"})
})

// Arrancamos el servicio
app.listen(PORT,()=>{
    // Mensaje que aparecera en la consola
    console.log("Servidor corriendo en el puerto http://localhost:" + PORT);
})
