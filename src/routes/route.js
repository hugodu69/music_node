import express from "express"
const coursesRouter = express.Router();

coursesRouter.get("/", (req, res) => {
	res.render("sources")
})

export default coursesRouter;
