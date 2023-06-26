import express from "express";

const application = express();

const port = 3000;

application
    .get("/", (req, res) => {
        res.send({
            message: "Hello, World!",
        });
    })


application.listen(port, "0.0.0.0", () => {
    console.log(`Application listening on port ${port}`);
});
