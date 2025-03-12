import express, { Express, Request, Response } from "express";
import cors from "cors";
import NodeCache from "node-cache";

import githubContributions from './GitHubContributions';
// import dotenv from "dotenv";
// dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

app.get("/GitHubContributions", async (req: Request, res: Response) => {
  const key = "test_key"

  const cached = cache.get(key);
  if (cached) {
    res.status(200).send(cached);
    return;
  }

  const data = await githubContributions();
  cache.set(key, data);

  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});