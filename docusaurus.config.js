// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HaoYe Life Docs',
  tagline: '记录生活、技术与思考',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://haoyelaiga.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/docusite/',

  organizationName: 'wingxu',
  projectName: 'docusite',

  noIndex: true,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './docs/vba',
          routeBasePath: 'vba',
          sidebarPath: './sidebars.js',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'HaoYe Docs',
        logo: {
          alt: 'HaoYe Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'VBA',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pythonSidebar',
            docsPluginId: 'python',
            position: 'left',
            label: 'Python',
          },
          {
            href: 'https://haoyelaiga.com',
            label: '主站',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'VBA',
                to: '/vba/intro',
              },
              {
                label: 'Python',
                to: '/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '主站',
                href: 'https://haoyelaiga.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HaoYe. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

config.plugins = [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'python',
      path: './docs/python',
      routeBasePath: '/',
      sidebarPath: './sidebars-python.js',
    },
  ],
];

export default config;
