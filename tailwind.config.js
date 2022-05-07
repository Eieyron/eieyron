module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      icon: ["Oleo Script Swash Caps", "cursive"],
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
    },
    plugins: [],
  },
};
