const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('dados.json');
const middlewares = jsonServer.defaults();

// Libera o CORS para o Flutter Web conseguir ler as imagens e os dados
server.use(cors());
server.use(middlewares);
server.use(router);

// O Render define a porta automaticamente, a 3000 por padrão
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server rodando na porta ${port}`);
});