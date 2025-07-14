declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const ReactComponent: FC<SVGProps<SVGElement>>;
  export default ReactComponent;
}
