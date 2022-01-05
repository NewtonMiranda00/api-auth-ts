import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import DTE from 'dotenv-expand';
import routes from '@routes/index';

DTE(config());

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => res.send({ Hello: 'World' }));

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Rest API running in PORT: ${PORT}`));
