import Router from "koa-router";
import Context from "../type/context";

import pingPongRouter from "./ping-pong.router";
import fileRouter from "./file.router";

const router = new Router<never, Context>();

router.use(pingPongRouter.routes());
router.use(fileRouter.routes());

export default router;
