import express from 'express';
import { getProjects } from './database.js';
import cors from 'cors';

const app = express();

app.use(cors());

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