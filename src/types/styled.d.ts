import 'styled-components';
import baseTheme from 'global/themes/';

declare module 'styled-components' {
  type Theme = typeof baseTheme;
  export interface DefaultTheme extends Theme {
    name: string;
  }
}
