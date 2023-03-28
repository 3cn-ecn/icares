// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Les ICAres',
  tagline: 'Compétition Inter-Centrale des Arts',
  url: 'https://www.icares-centrale.fr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-icares.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '3cn-ecn', // Usually your GitHub org/user name.
  projectName: 'icares', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
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
        title: 'ICAres',
        logo: {
          alt: 'Logo ICAres',
          src: 'img/logo-icares.png',
        },
        items: [
          {
            to: '/epreuves',
            position: 'left',
            label: 'Épreuves',
          },
          {
            to: '/oeuvres',
            position: 'left',
            label: 'Œuvres',
          },
          {
            to: '/resultats',
            position: 'left',
            label: 'Résultats',
          },
          {
            to: '/souvenirs',
            position: 'left',
            label: 'Souvenirs',
          },
          {
            type: 'dropdown',
            label: 'Plus',
            items: [
              {
                to: '/planning',
                label: 'Planning',
              },
              {
                to: '/infos-pratiques',
                label: 'Infos Pratiques',
              },
              {
                to: '/soiree',
                label: 'Soirée',
              },
              {
                to: '/equipe',
                label: 'L\'Équipe',
              }
            ]
          },
          {
            href: 'https://www.flickr.com/photos/icares_centrale/',
            position: 'right',
            label: 'Flickr'
          },
          {
            href: 'https://www.instagram.com/icares.centrale/',
            position: 'right',
            label: 'Instagram'
          },
          {
            href: 'https://www.facebook.com/InterCentralesdesArts',
            position: 'right',
            label: 'Facebook'
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'ICAres Nantes 2022 - Conception : <a href="https://github.com/3cn-ecn" target="_blank" rel="noopener noreferrer">3CN Centrale Nantes</a> - Hébergeur : Github Inc.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark'
      }
    }),
};

module.exports = config;
