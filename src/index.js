import express from "express"
import "dotenv/config"
const app = express();
import mongoose from "mongoose";
import coursesRouter from "./routes/route";
import path from "path"

const { SERVER_PORT,DBUrl } = process.env

mongoose.connect(DBUrl);
mongoose.connection.on("connected", () => {
	console.log("the mongo is working 27017")
})

app.listen(SERVER_PORT, () => {
	console.log(`ca marche sur le port ${ SERVER_PORT }`)
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use("/courses", coursesRouter)
