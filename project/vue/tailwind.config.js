module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extends: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
