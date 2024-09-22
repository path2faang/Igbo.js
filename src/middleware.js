// src/middleware.js

import convertIgboToEnglish from './converter.js';

export const igboConverterMiddleware = (req, res, next) => {
    const { keyword } = req.body; // Expecting { keyword: "some keyword" }

    if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
    }

    try {
        const convertedKeyword = convertIgboToEnglish(keyword);
        req.convertedKeyword = convertedKeyword; // Attach converted result to the request
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
