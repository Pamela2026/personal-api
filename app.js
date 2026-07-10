const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "API is running"
    });
});

app.get("/health", (req, res) => {
    res.json({
        message: "healthy"
    });
});

app.get("/me", (req, res) => {
    res.json({
        name: "Pamela Patrick",
        email: "pamelapatrick464@gmail.com",
        github: "https://github.com/Pamela2026"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on port ${PORT}`);
});
