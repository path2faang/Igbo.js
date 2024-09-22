// keywordConverter.js
import igboParser from './igboparser.js';

export default (keyword) => {
    // Check if IGBO_ENGLISH is set to true
    const isIgboToEnglish = process.env.IGBO_ENGLISH === 'true';

    if (isIgboToEnglish) {
        // Convert from Igbo to English
        if (igboParser[keyword]) {
            return igboParser[keyword]; // Igbo to English
        }
        
        const entry = Object.entries(igboParser).find(([key, value]) => value === keyword);
        
        if (entry) {
            return entry[0]; // English to Igbo
        }
    } else {
        // Default behavior (English to Igbo)
        const entry = Object.entries(igboParser).find(([key, value]) => value === keyword);
        
        if (entry) {
            return entry[0]; // English to Igbo
        }
    }

    throw new Error(`Odabanye! Keyword not found: ${keyword}`);
};
