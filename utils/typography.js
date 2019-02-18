import Typography from "typography";

export const DefaultTypography = new Typography({
  title: "Default Typography",
  baseFontSize: "18px",
  baseLineHeight: 1.3,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: "Fjalla One",
      styles: ["400"]
    },
    {
      name: "Nunito",
      styles: ["500"]
    }
  ]
});
