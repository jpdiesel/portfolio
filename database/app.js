import express from 'express';
import { getProjects } from './database.js';

const app = express();

app.get("/", async (req, res) => {
  const projetos = await getProjects();
  res.status(200).send(projetos);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Deu ruim =/');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080')
});