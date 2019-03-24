import Typography from 'typography';

const DefaultTypography = new Typography({
  title: 'Default Typography',
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Fjalla One',
      styles: ['400'],
    },
    {
      name: 'Nunito',
      styles: ['500'],
    },
  ],
});

export default DefaultTypography;
