const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send("Hello from Coolify!");
});

app.listen(port, "0.0.0.0", () => console.log(`Up on ${port}`));