import { isEven } from "@local/lib";
import type { FastifyPluginAsync } from "fastify";

export const v1Router: FastifyPluginAsync = async (fastify, _options) => {
  fastify.get("/balls", () => isEven(2));
};
