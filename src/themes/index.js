const lightTheme = {
  fonts: {
    primary: 'Overpass, sans-serif',
    secondary: 'Merriweather, serif',
    globalSize: 16,
  },
  weights: {
    regular: 400,
    bold: 700,
  },
  colors: {
    primary: '#69A4D5',
    secondary: '#000000',
    white: '#ffffff',
    black: '#000000',
    gray: '#ccc',
    headerColor: '#ffffff',
    bgColor: '#ffffff',
    bgColorSecundary: '#efefef',
    footerColor: '#000000',
  },
  sizes: {
    wrapperWidth: 1208,
    wrapperGap: 30,
    siteMaxWidth: 2560,
  },
  breakpoints: {
    desktopLg: '1900px',
    desktopMd: '1260px',
    desktopSm: '960px',
    mobileLg: '560px',
    mobileMd: '428px',
    mobileSm: 0,
  },
};

const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    headerColor: 'rgba(0,0,0,.6)',
    bgColor: 'rgba(0,0,0,.6)',
  },
};

export { lightTheme, darkTheme };
