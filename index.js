import express from "express";
import connectDB from "./src/common/configs/connectDB.js";
import { PORT} from "./src/common/configs/enviroments.js";
import router from "./src/routes/index.js";
import errorHandler from "./src/common/middlewares/errorHandle.js";
import setupSwagger from "./src/common/configs/swagger-config.js";

connectDB();

const app = express();

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);
setupSwagger(app);

app.listen(PORT, () => {
	console.log(`Server running at http://${PORT}/`);
	console.log(`Swagger Docs available at${PORT}/api-docs`);
});
