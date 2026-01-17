module.exports = {
    purge: {
        content: [
            '../../base/templates/**/*.phtml',
        ],
        options: {
            safelist: [/^aspect-/, /^duration-/],
        },
    }
}
