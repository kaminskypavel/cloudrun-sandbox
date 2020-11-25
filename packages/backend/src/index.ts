import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import router from "./routes";
import faker from "faker";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", router)

app.all("*", (req, res) => {
    res.send("not found")
})


// @ts-ignore
global.runnerName = faker.internet.userName();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Running on', port);
});
