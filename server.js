const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Read an environment variable (set in Coolify)
const message = process.env.WELCOME_MESSAGE || "Hello from Coolify!";

app.get('/', (req, res) => {
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});