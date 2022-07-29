import express from 'express';
import router from './routes/user.routes';

const app = express();
const port = 8000;

app.use(express.json());

app.use('/users', router);

app.listen(port);