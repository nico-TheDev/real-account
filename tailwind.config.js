module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                head: ["Montserrat", "sans-serif"],
                body: ["Lato", "sans-serif"],
            },
            colors: {
                main: "#46C8DC",
                gray: "#D8E4EB",
                midbrown: "#A38978",
                lightbrown: "#D5B383",
                lightblue: "#9ECDEC",
            },
            height: {
                nav1: "10vh",
                nav2: "12vh",
                nav3: "15vh",
                body: "88vh",
            },
        },
    },
    variants: {},
    plugins: [],
};
