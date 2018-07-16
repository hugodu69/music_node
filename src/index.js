import express from "express"
import "dotenv/config"
const app = express();
import volleyball from "volleyball";
app.use(volleyball);
const { SERVER_PORT } = process.env

app.listen(SERVER_PORT, () => {
	console.log(`ca marche sur le port ${ SERVER_PORT }`)
})

app.get("/", (req, res) => {
	res.send("coucou")
})
