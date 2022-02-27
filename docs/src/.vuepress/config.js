const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'APNS Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: `Create UNLIMITED DeFi push notifications to your: email, SMS and ALL popular social networks.`,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Users',
        link: '/users/',
      },
      {
        text: 'Sponsors',
        link: '/sponsors/'
      },
      {
        text: 'Builders',
        link: '/builders/'
      },
      {
        text: 'Open dApp',
        link: 'https://apns.io'
      }
    ],
    sidebar: {
      '/builders/': [
        {
          title: 'Builders Guide',
          collapsable: false,
          children: [
            '',
            'examples',
          ]
        }
      ],
      '/sponsors/': [
        {
          title: 'Sponsors Guide',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/users/': [
        {
          title: 'User Guide',
          collapsable: false,
          children: [
            '',
            'examples',
            '$APNS',
            'blockchains',
            'platforms',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
