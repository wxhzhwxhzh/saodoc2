// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IT知识学习网站',
  tagline: '编程教程学习平台',
  favicon: 'img/favicon.ico',

  url: 'https://your-domain.com',
  // baseUrl  需要改成你的仓库名，如果你启用了GitHub Pages，请改成你的仓库名,默认是/
  baseUrl: 'saodoc2',
  // 对于死链接，默认是warn，可以改成其他的选项，比如ignore,throw
  onBrokenLinks: 'warn',

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
            label: 'JavaScript',
            position: 'left',
          },    
          {
            to: '/docs/node/node1',
            label: 'node',
            position: 'left',
          },
          {
            to: '/docs/docusaurus/1',
            label: 'Docusaurus',
            position: 'left',
          },
          {
            to: '/docs/其他/0',
            label: '其他',
            position: 'left',
          },
          // 类型3：下拉菜单
          {
            type: 'dropdown',
            label: '更多',
            position: 'left',
            items: [
              {
                label: 'JavaScript',
                to: '/docs/javascript/intro',
              },
              {
                label: 'Python',
                to: '/docs/python/intro',
              },
              {
                label: 'Java',
                to: '/docs/java/intro',
              },

            ],
          },
          //右边链接
          // 类型6：搜索框
          {
            type: 'search',
            position: 'right',
          },

          // 类型7：语言切换
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/wxhzhwxhzh',
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

      // ---------- 公告栏 ----------
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ 如果你喜欢这个网站，请在 <a target="_blank" rel="noopener noreferrer" href="https://github.com/wxhzhwxhzh">GitHub</a> 给我们一个 Star！',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

module.exports = config;