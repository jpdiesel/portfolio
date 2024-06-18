import express from 'express';
import { getProjects, getProjectsEN } from './database.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.get("/projetos", async (_req, res) => {
  const projetos = await getProjects();
  res.status(200).send(projetos);
});

app.get("/projects", async (_req, res) => {
  const projetos = await getProjectsEN();
  res.status(200).send(projetos);
});



app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Deu ruim =/');
});

const port = process.env.PORT || 8181;

app.listen(port, async () => {
  console.log('Server is running on port ' + port)
});