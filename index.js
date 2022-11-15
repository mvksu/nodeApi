const express = require('express');
const v1Router = require("./v1/routes/productsRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use("/api/v1/products", v1Router);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});