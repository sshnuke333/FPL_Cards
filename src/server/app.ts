import axios from 'axios';
import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

const { port } = process.env;
const dataURL = process.env.PLAYER_DATA_URL as string;
const corsURL = process.env.CORS_URL as string;

app.use(helmet());
app.get('/health-check', (_req, res) => {
    res.send('server running successfully.');
});
app.get(
    '/fetch-FPLData',
    cors({ origin: corsURL, optionsSuccessStatus: 200, methods: 'GET' }),
    (_req, res) => {
        (async () => {
            try {
                const { data } = await axios.get(dataURL);
                const elements = data?.elements;
                const elementTypes = data?.element_types;
                res.json({ elements, elementTypes });
            } catch (error) {
                res.status(500).send('Try again');
            }
        })();
    }
);
app.listen(port, () => console.log(`app is listening on port ${port}`));
