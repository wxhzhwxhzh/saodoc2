// @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IT知识学习网站',
  tagline: '编程教程学习平台',
  favicon: 'img/favicon.ico',
  
  url: 'https://your-domain.com',
  // baseUrl  需要改成你的仓库名，如果你启用了GitHub Pages，请改成你的仓库名,默认是/
  baseUrl: 'saodoc2',
  
  onBrokenLinks: 'throw',
  
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // 禁用博客
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
        title: 'IT知识学习网站',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/javascript/intro',
            label: 'JavaScript教程',
            position: 'left',
          },
          {
            to: '/docs/python/intro',
            label: 'Pythont教程',
            position: 'left',
          },
          {
            href: 'https://github.com/your-repo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} IT知识学习网站`,
      },
      
      prism: {
        theme: themes.github,
        darkTheme: themes.nightOwl,
      },
    }),
};

module.exports = config;