import "reflect-metadata";

import { Server } from "net";
import Application from "koa";
import dependency from "@cheeket/koa";
import { setGracefulCleanup } from "tmp-promise";
import dotenv from "dotenv";

import DependencyInitializer from "./dependency.initializer";
import router from "./router";

dotenv.config();
setGracefulCleanup();

async function bootstrap(port?: number): Promise<Server> {
  const application = new Application();

  application.use(
    dependency(new DependencyInitializer(), { maxListeners: 1000 })
  );

  application.use(router.routes());
  application.use(router.allowedMethods());

  return application.listen(port);
}

export default bootstrap;
