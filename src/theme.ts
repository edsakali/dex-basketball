import "styled-components";
import { styledTheme } from "./assets/styles/styledTheming";

declare module "styled-components" {
  type Theme = typeof styledTheme;
  interface DefaultTheme extends Theme {}
}
