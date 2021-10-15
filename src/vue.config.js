module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: "@import '/src/assets/styles/style.scss';",
            },
        },
    },

    // publicPath: '/mr-events/web-front',
}