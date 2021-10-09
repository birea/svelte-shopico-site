module.exports = {
    purge: {
        mode: 'all',
        content: ['./**/**/*.html', './**/**/*.svelte'],

        options: {
            whitelistPatterns: [/svelte-/],
            defaultExtractor: (content) =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        },
    },

    theme: {
        extend: {
            borderRadius: {
                '2xl': '1.5rem'
            }
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
    corePlugins: {
        container: false,
    },
    future: {
        // purgeLayersByDefault: true,
        // removeDeprecatedGapUtilities: true,
    },
};
