/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem("theme") || "light",
    themes: {
      light: {
        colors: {
          primary: "#1976d2ff",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          default: "#000",
        },
      },
      dark: {
        colors: {
          primary: "#BB86FC",
          secondary: "#03DAC6",
          accent: "#03A9F4",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          default: "#fff",
        },
      },
    },
  },
});
