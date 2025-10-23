// @ts-check
const config = {
  title: 'Tài liệu của bạn',
  tagline: 'Chào mừng đến với hệ thống tài liệu',
  url: 'https://your-vercel-domain.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'your-github-username',
  projectName: 'my-docs-site',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;
