/** @type {import('tailwindcss').Config} */
const defaultScreens = require('tailwindcss/defaultConfig').theme.screens;

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      "xs": "500px",
      ...defaultScreens,
    },
    extend: {
      colors: {
        body: "#f7f7fa",
        primary:{
          "100": "#90B6FF",
          "200": "#85AFFF",
          "300": "#79A7FF",
          "400": "#516FAA",
          "500": "#3D537F",
          "600": "#33456A",
          "700": "#2E3E5F",
          "800": "#2C3B5A",
          "900": "#2B3957",
        },
        secondary:{
          "100": "#A99AF0",
          "200": "#A090EF",
          "300": "#9785ED",
          "400": "#2C3D8E",
          "500": "#826CE9",
          "600": "#7662D4",
          "700": "#6B59C1",
          "800": "#6151AF",
          "900": "#002C53",
        },
        info:{
          "100": "#5BDDFA",
          "200": "#4BDAFA",
          "300": "#39D6FA",
          "400": "#25D2FA",
          "500": "#2886A9",
          "600": "#2A6080",
          "700": "#2B4D6C",
          "800": "#2B4362",
          "900": "#2B3E5D",
        }
      }
    }
  },
  plugins: [],
}

