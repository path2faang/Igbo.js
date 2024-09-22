import { config } from 'dotenv';
import keywordConverter from './parser/keywordConverter.js';
import fs from 'fs';
import path from 'path';
import express from 'express';

config();

// Now all Igbo builds are stored in igbo_build, English in english_build
// All inside the build/

const app = express();
let serverStarted = false; // Flag to ensure server starts only once


// Function to check if a file contains Igbo code
const containsIgboCode = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Add your own logic to determine if the file contains Igbo code
    return process.env.IGBO_ENGLISH ? true : false; // Example logic
};

const traverseDirectories = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
        if (file.startsWith('.') || file === 'node_modules' || file == 'index.js') {
            return; // Skip hidden files and node_modules
        }

        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            traverseDirectories(filePath); // Recursive call for directories
        } else if (file.endsWith('.js')) { // Check only JavaScript files
            if (containsIgboCode(filePath)) {
                console.log(`Igbo code found in: ${filePath}`);
            }
        }
    });
};

// Create the logs directory
(async function () {
    const pathName = 'logs';
    try {
        if (!fs.existsSync(pathName)) { // Create the logs directory
            fs.mkdirSync(pathName);
        }

        // Start the server if needed
    } catch (error) {
        throw error;
    }
})(); // Self-executing function

// Start traversing from the current directory
traverseDirectories(process.cwd());
