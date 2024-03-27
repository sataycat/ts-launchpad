import fastify, { type FastifyServerOptions } from "fastify";
import { env } from "~/env";
import { v1Router } from "~/routers/v1-router";

const envToLogger: Record<string, FastifyServerOptions["logger"]> = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
};

const server = fastify({
  logger: envToLogger[env.NODE_ENV],
}).register(v1Router, { prefix: "/api/v1" });

const start = async () => {
  try {
    await server.listen({ port: env.PORT, host: "0.0.0.0" });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
