/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
          
            "primary": "#bdbcff",
                    
            "secondary": "#c6a53f",
                    
            "accent": "#6f85c6",
                    
            "neutral": "#322136",
                    
            "base-100": "#F4EFF6",
                    
            "info": "#5197E6",
                    
            "success": "#137144",
                    
            "warning": "#994F06",
                    
            "error": "#E62868",
          },
        },
      ],
  },
  plugins: [require("daisyui")],
}
