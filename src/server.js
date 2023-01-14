import "./db.js";
import express from "express";
import morgan from "morgan";


import dotenv from "dotenv"
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import classRouter from "./routers/classRouter.js";

import userInfoRouter from "./routers/userInfoRouter.js";
import materialRouter from "./routers/materialRouter.js";
import classMaterialRouter from "./routers/classMaterialRouter.js";
// import liveRouter from "./routers/liveRouter.js";

import { cors } from "./middlewares.js";
import { parse } from "path";
import bodyParser from "body-parser";
import multer from "multer"

dotenv.config();
const secretKey = process.env.JWT_SECRET

const logger = morgan("dev");
const app = express();  
const PORT = 3300;


app.use(express.urlencoded({extended: false }));
app.use(express.text()); 
app.use(express.json()); //string을 받아서 json으로 바꿔주는 middleware (JSON.parse를 해준다고 생각하면 됨)


app.use(cors);
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/class", classRouter);
// app.use("/live", liveRouter);
app.use("/material", materialRouter);
app.use("/userinfo", userInfoRouter);
app.use("/classMaterial", classMaterialRouter);


const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀 `);
app.listen(PORT, handleListening);