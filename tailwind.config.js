module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          1: "#022B3A",
          2: "#CEFDFF",
          3: "#EFF7F6",
          4: "#C8C6D7"
          
        },
        fg: {
          1: "#273043",  
          2: "#FF5C58",
          3: "#FE2727",
          4: "#EFF7F6",
          5:"#343434"
        }
      },
      fontFamily: {
        dmMono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
