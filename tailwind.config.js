const plugin = require("tailwindcss/plugin");
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  mode: "jit",
  purge: {
    content: ["./pages/**/*.js"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        anek: "Anek Malayalam, sans-serif",
        notoSansMalayalam: "Noto Sans Malayalam,  sans-serif",
      },
      colors: {
        primary: {
          50: "#FFFCF3",
          100: "#FFD761",
          200: "#FFF3BF",
          300: "#FFEBA0",
          400: "#FFE488",
          500: "#FFD761",
          600: "#DBB146",
          700: "#B78E30",
          800: "#936D1E",
          900: "#7A5512",
        },
        secondary: {
          50: "#F6F1FD",
          100: "#E7DBFA",
          200: "#D0BAF2",
          300: "#B186EA",
          400: "#8A57DB",
          500: "#6436B0",
          600: "#4D1E9B",
          700: "#3E1A74",
          800: "#2F1457",
          900: "#28114B",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
