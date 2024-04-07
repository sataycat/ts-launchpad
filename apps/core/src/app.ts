import { contract } from "@local/lib";
import { createExpressEndpoints } from "@ts-rest/express";
import { generateOpenApi } from "@ts-rest/open-api";
import express from "express";
import { pinoHttp } from "pino-http";
import * as swaggerUi from "swagger-ui-express";
import { v1Router } from "~/routers/v1-router";

const openApiDocument = generateOpenApi(contract, {
  info: {
    title: "Core API",
    version: "1.0.0",
  },
});

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(pinoHttp());

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

  createExpressEndpoints(contract, v1Router, app);

  return app;
}
