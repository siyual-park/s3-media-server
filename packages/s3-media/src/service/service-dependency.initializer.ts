import { Initializer } from "@cheeket/koa";
import { inContainerScope, interfaces } from "cheeket";
import { autoInjected } from "@cheeket/injector";

import Token from "./token";
import Uploader from "./uploader";
import styleRepositoryProvider from "./style/style-repository.provider";

class ServiceDependencyInitializer implements Initializer {
  private readonly s3UploaderProvider = inContainerScope(
    autoInjected(Uploader)
  );

  private readonly styleRepositoryProvider = inContainerScope(
    styleRepositoryProvider()
  );

  initRootContainer(container: interfaces.Container): void {
    container.bind(Token.UPLOADER, this.s3UploaderProvider);
    container.bind(Token.STYLE_REPOSITORY, this.styleRepositoryProvider);
  }

  // eslint-disable-next-line class-methods-use-this
  initContextContainer(container: interfaces.Container): void {}
}

export default ServiceDependencyInitializer;
