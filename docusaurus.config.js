// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Netomi Docs',
  future: {
    faster: true,
    v4: true,
  },
  tagline: 'Developer documentation for the Netomi AI customer service platform',
  favicon: 'img/favicon.ico',

  url: 'https://Rahulkhinchi03.github.io',
  baseUrl: '/netomi-docs/',

  organizationName: 'Rahulkhinchi03',
  projectName: 'netomi-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Netomi Docs',
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Rahulkhinchi03/netomi-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Built with Docusaurus`,
      },
    }),
};

module.exports = config;