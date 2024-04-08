import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);
	return;
}
try {
	await mongoose.connect(process.env.MONGODB_URL, {
		dbName: "Chatbook",
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	isConnected = true;
	console.log("MongoDB is connected successfully");
} catch (error) {
	console.log(error);

}