import mongoose from "mongoose"
const Schema = mongoose.Schema;

const courses = new Schema ({
	name: String,
	author: String,
	tags: [String],
	date: {type:Date, default:Date.now},
	isPublished: BooleanOA
})

export default courses;
