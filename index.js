const express = require("express");
const app = express();
const router = require("./routes/routes")

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(router);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})