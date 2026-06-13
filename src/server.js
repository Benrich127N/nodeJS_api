const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.json({message: "hello world"});
});

 
const PORT = 5001;
const server = app.listen(PORT, () => {console.log(`Server running on PORT ${PORT}`);});


// GET POST