import express, { Express, Request, Response } from "express";
import cors from "cors";

import githubContributions from './GitHubContributions';
// import dotenv from "dotenv";
// dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/GitHubContributions", async (req: Request, res: Response) => {
  res.send(await githubContributions());
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});