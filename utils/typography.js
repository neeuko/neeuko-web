import Typography from "typography";

export const DefaultTypography = new Typography({
  title: "Default Typography",
  baseFontSize: "15px",
  baseLineHeight: "1.5",
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
