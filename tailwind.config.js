module.exports = {
    content: [
        "./pages/**/*.{html,ts}",
        "./components/**/*.{html,ts}",
        "./src/**/*.{html,ts}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            "dark-gray": "#191d1f",
            "gray": "#1e2224",
            "light-gray": "#23272a",
            "input": "#32383d",
            "green": "#86c332",
            "dark-green": "#557d1c",
            "white": "#BBBBBB",
            "link-hover": "#ffffff",
        },
        extend: {

        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
