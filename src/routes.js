// src/routes.js

import express from 'express';
import { igboConverterMiddleware } from './middleware.js';

const router = express.Router();

router.post('/convert', igboConverterMiddleware, (req, res) => {
    res.json({ converted: req.convertedKeyword });
});

export default router;
