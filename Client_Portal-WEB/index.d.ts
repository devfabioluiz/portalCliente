import { type Theme as MuiTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    lightGrey: Palette['primary'];
    mediumGrey: Palette['primary'];
    darkText: Palette['primary'];
    purpleText: Palette['primary'];
    white: Palette['primary'];
    green: Palette['primary'];
    orange: Palette['primary'];
    red: Palette['primary'];
    purple: Palette['primary'];
  }

  interface PaletteOptions {
    lightGrey: PaletteOptions['primary'];
    mediumGrey: PaletteOptions['primary'];
    darkText: PaletteOptions['primary'];
    purpleText: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    orange: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
    purple: PaletteOptions['primary'];
  }
}

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}
