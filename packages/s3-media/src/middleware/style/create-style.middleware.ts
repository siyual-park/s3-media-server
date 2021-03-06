import Application, { DefaultState } from "koa";
import Context from "../../type/context";
import JsonRepository from "../../s3/json-repository";
import Style from "../../type/style";
import Token from "../../service/token";

const createStyleMiddleware: Application.Middleware<
  DefaultState,
  Context
> = async (context, next) => {
  const style = context.request.body;

  const styleRepository: JsonRepository<Style> = await context.resolve(
    Token.STYLE_REPOSITORY
  );

  context.body = await styleRepository.create(style);
  context.status = 201;

  await next();
};

export default createStyleMiddleware;
