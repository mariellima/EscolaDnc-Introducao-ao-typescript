import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import  express from 'express';
import type { Express, Request, Response } from 'express';
import type PostRequest from './dtos/post.request.js';
import PostHandler from './utils/post.handler.js';
import type GetRequest from './dtos/get.request.js';
import GetHandler from './utils/get.handler.js';


dotenv.config();

const app: Express = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.post("/", (req: Request, res: Response) => {
  const body: PostRequest = req.body;
  const response = PostHandler.buildPostResponse(body);
  res.json(response);
});

app.get("/", (req: Request, res: Response) => {
  const data: GetRequest = req.query
  const response = GetHandler.buildGetResponse(data);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Servidor TypeScript rodando na porta ${port}`);
});