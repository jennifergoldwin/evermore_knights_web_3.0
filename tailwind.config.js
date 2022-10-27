module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mf: "575px",
        mdf: "640px",
        lf: "1276px",
      },
    },
  },
  plugins: [],
};
