import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import userRouter from "./routes/user";
import mypageRouter from "./routes/mypage";

const app = express();
const port = 3000;



