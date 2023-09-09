import "styled-components";
import { defaultTheme } from "../styles/themes/default";

//define types for you theme so TS brings auto-complete for you.

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface defaultTheme extends ThemeType {}
}
