**install vue With Vite**
npm create vite@latest
npm run dev

*****************************
**install tailwind CSS**
1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init

3. Add New File :    **postcss.config.cjs**
module.exports = ({ env }) => ({ plugins: [ require('tailwindcss')(), require('autoprefixer')() ] })

4. tailwind.config.js
   /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

5. Add new file **main.css**
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
   
6. **npm run dev**

   **Template install **
npm install @headlessui/vue @heroicons/vue @tailwindcss/forms

*******************************************
For vuex install
1. npm install -s vuex@next
2. 
