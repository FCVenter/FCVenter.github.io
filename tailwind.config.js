module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './node_modules/@rewind-ui/core/**/*.js', 
    './node_modules/@rewind-ui/core/dist/theme/styles/*.js', 
    './src/theme/styles/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        softBeige: '#FAF3E0', // Add Soft Beige to the color palette
        darkBackground: '#1A202C', // Optional: Add a dark background for consistency
      },
    },
  },
  plugins: [],
};
