/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "main-green": "hsl(75, 94%, 57%)",
        "main-grey": "hsl(0, 0%, 20%)",
        "dark-grey": "hsl(0, 0%, 12%)",
        "off-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: "Inter",
			},
			screens: {
				'xs': "375px"
			}
    },
  },
  plugins: [],
};
