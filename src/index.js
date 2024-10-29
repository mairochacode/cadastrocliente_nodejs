const express = require("express");
const cors = require("cors"); // Importa o CORS
const app = express();
const port = process.env.PORT || 8000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para analisar o corpo da solicitação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const rotas = require("./servicos"); // Rotas dos serviços
app.use(rotas); // Carrega os serviços

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
