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

//si on appel une mauvaise route le serveur renvois une erreur
app.use((req, res, next) => {
	const error = new Error('Not found')
	error.message = 'route invalide'
	error.status = 404
	next(error)
})
//si le serveur 
app.use((error, req, res, next) => {
	res.status(error.status || 500)
	return res.json({
		error:{
			msg: error.message
		}
	})
})
