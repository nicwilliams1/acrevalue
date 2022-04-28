const express = require("express");


const app = express();
const port = process.env.PORT || "3000";


app.get('/app/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => console.log(`App is running`))