import express from "express";
import { routes } from "./routes";

import swaggerUi from "swagger-ui-express";
import swaggerSetupFile from "./swagger.json"

const app = express();

app.use(express.json());
app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetupFile))

app.listen(3333, () => console.log("Server is running!"));
