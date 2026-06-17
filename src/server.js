import express from "express";

import movieRoutes from "./routes/movieRoutes.js";


const app = express();




// api routes


app.use("/movies", movieRoutes
  
);

 
const PORT = 5001;
app.listen(PORT, () => {console.log(`Server running on PORT ${PORT}`);});


// GET POST
// http://localhost:5001/hello
