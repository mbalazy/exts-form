const mainTheme = {
  colors: {
    primary: '#D6A81A',
    secondary: '#DADAD8',
    white: '#FFF',
    black: 'rgba(0, 0, 0, 0.9)',
    overlay: 'rgba(48, 48, 48, 0.9)',
  },

  fontSize: {
    s: '1.5rem',
    m: '1.6rem',
    l: '1.8rem',
    xl: '2rem',
    xxl: '2.4rem',
    mega: '3.4rem',
  },

  dimensions: {
    headerHeight: '8rem',
  },

  up: (breakpoint: string, vertical = false) =>
    `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 1px))`,
  down: (breakpoint: string, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
  between: (breakpointMin: string, breakpointMax: string, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${
      vertical ? 'height' : 'width'
    }: calc(${breakpointMin} + 1px))`,

  breakpoints: {
    xl: '1200px',
    l: '900px',
    m: '767px',
    s: '480px',
  },

} as const

type MainThemeType = typeof mainTheme

declare module "styled-components" {
  export interface DefaultTheme extends MainThemeType {}
}

export default mainTheme
