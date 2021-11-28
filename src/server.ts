import express from 'express';

const app = express();

app.get("/", (req: any, res: any) => {
    res.send("Hello, TS server")
})

app.listen(5678, () => {
    console.log("Server is running on http://localhost:5678");

})