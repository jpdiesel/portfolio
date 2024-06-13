import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}).promise();

export async function getProjects() {
  const [result] = await pool.query("SELECT * FROM projetos");
  return result;
}
