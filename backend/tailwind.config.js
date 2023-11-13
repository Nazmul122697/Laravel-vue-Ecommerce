/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,vue,ts,tsx,jsx}", "./index.html"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
