// src/index.js

import express from 'express';
import routes from './routes.js';

const createIgboConverterApp = () => {
    const app = express();

    // Middleware to parse JSON request bodies
    app.use(express.json());

    // Use the routes from the framework
    app.use('/api', routes);

    return app;
};

// Export the framework function
export default createIgboConverterApp;
