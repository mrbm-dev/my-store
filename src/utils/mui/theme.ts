import { createTheme } from "@mui/material";
import { faIR } from "@mui/material/locale";
export const theme = createTheme(
  {
    typography: {
      fontFamily: [
        "Regular",
        "Light",
        "ExtraLight",
        "Thin",
        "Medium",
        "SemiBold",
        "Bold",
        "ExtraBold",
        "Black",
      ].join(","),
    },
    shape: {
      borderRadius: 8,
    },
    palette: {
      primary: {
        main: "#d23f57",
      },
    },
  },
  faIR
);
