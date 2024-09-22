// app.js

import createIgboConverterApp from './src/index.js';

const app = createIgboConverterApp();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
