module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: "class",
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
            "test": "#770077",
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
    rules: {
        'at-rule-no-unknown': [true, {
            ignoreAtRules: [
                'tailwind',
                'apply',
                'variants',
                'responsive',
                'screen'
            ]
        }],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null
    }
}
