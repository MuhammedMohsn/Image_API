import express from 'express';
import routes from './Routes/api/images';
const app = express();
export const port = 3000;
app.listen(port, function () {
  console.log(`Running server on PORT 3000...`);
});
app.get('/', (req: express.Request, res: express.Response): void => {
  res.status(200).send('home page');
});
app.use('/images', routes);
export default app;
