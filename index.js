import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { config } from './src/config/index.js';
import router from './src/routes/apiRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use('/api/v1', router);

app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found!',
    });
});

const onListening = () => {
    console.log(`
    ================================
    🚀 Server is up and running!
    ================================
    🔗 URL: ${config.SERVER_URL}
    🌱 Environment: ${config.ENV}
    📡 Listening on port: ${config.PORT}
    ================================
    `);
};

app.listen(config.PORT, onListening);
