import express from 'express';
import { getProjects } from './database.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/", async (_req, res) => {
  const projetos = await getProjects();
  res.status(200).send(projetos);
});

// app.get("/:id", async (_req, res) => {
//   const projeto = await getProjectById();
//   res.status(200).send(projeto);
// })

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Deu ruim =/');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080')
});