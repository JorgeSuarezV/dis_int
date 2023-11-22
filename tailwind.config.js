/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'custom': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
                'bottomSheet': '0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)'
            },
            colors: {
                primary: {
                    100: '#E3EAFF',
                    200: '#BFCFFF',
                    300: '#9CB0F7',
                    400: '#6989F7',
                    500: '#4063D6',
                    700: '#1D48D6',
                },
                active: {
                    700: '#0094FF'
                },
                greyScale: {
                    100: '#F6F6F6',
                    150: '#F2F2F2',
                    200: '#E0E1E3',
                    300: '#CBCFD3',
                    400: '#B7BCC2',
                    500: '#A0A8AE',
                    600: '#89939B',
                    700: '#707070',
                    800: '#575757',
                    900: '#494949',
                },
                error: {
                    red: "#EC7F74",
                },
                red: {
                    400: '#F27373',
                    900: '#EC0000',
                }
            },
            fontFamily: {
                "Mandrope": ["Mandrope", "sans-serif"],
                "Inter": ["Inter", "sans-serif"],
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

