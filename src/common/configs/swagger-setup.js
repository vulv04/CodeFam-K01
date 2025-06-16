import swaggerAutogen from "swagger-autogen";
import { HOST, PORT } from "./enviroments.js";
swaggerAutogen();
const outputFile = "./src/common/configs/swagger-output.json";
const endpointsFiles = ["../../routes/index.js"]; // chỉnh sửa theo đường dẫn
const swaggerConfig = {
  info: {
    title: "Backend API Codefarm Ecommerce K01 ThayHoangJS",
    description: "API Codefarm By ThayHoangJS",
    version: "1.0.0",
  },
  host: `${HOST}:${PORT}`,
  basePath: "/api",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {
    BearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },
};
swaggerAutogen()(outputFile, endpointsFiles, swaggerConfig);
