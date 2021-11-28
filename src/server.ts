import express from 'express';
import userRoute from './routes/users';
import urlRoutes from './routes/urls';


const app = express();

app.use("/urls", urlRoutes);
app.use("/users", userRoute);

app.get("/", (req: any, res: any) => {
    res.send("Hello, TS server")
})

app.listen(5678, () => {
    console.log("Server is running on http://localhost:5678");

})