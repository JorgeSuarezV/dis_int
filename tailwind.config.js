/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#E3EAFF",
                    200: "#BFCFFF",
                    300: "#9CB0F7",
                    400: "#6989F7",
                    500: "#4063D6",
                    600: "#1D48D6",
                },
                greyScale: {
                    100: "#F2F2F2",
                    200: "#E0E1E3",
                    300: "#CBCFD3",
                    400: "#B7BCC2",
                    500: "#A0A8AE",
                    600: "#89939B",
                },
                error: {
                    red: "#EC7F74",
                }
            },
            fontFamily: {
                "Mandrope": ["Mandrope", "sans-serif"],
            },
            dropShadow: {
                'custom': [
                    '0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
                    '0px 4px 8px 3px rgba(0, 0, 0, 0.15)'
                ]
            }
        }
    },
    plugins: [],
}

