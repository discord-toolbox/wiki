// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Discord Toolbox',
    tagline: 'Tools for all the fellow Discord power users and nerds out there',
    url: 'https://distools.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'discord-toolbox',
    projectName: 'wiki',

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/discord-toolbox/wiki/edit/main/',
                    routeBasePath: '/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Toolbox',
                logo: {
                    alt: 'My Site Logo',
                    src: '/img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {
                        href: 'https://github.com/discord-toolbox/wiki',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
