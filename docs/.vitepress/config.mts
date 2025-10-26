import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kigurumi风扇改造",
  description: "Kigurumi风扇改造",
  base: "/KigurumiFanUpgrade/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '风扇改造', link: '/fan-upgrade/' },
      { text: '自制眼片', link: '/make-eyes/' },
    ],

    sidebar: {
      '/fan-upgrade/': [
        {
          text: '风扇改造',
          items: [
            { text: '前言', link: '/fan-upgrade/' },
            { text: '安装前注意事项', link: '/fan-upgrade/pre-install' },
            { text: '购买元器件', link: '/fan-upgrade/buying-materials' },
            { text: '安装步骤', link: '/fan-upgrade/install' },
            { text: 'Q&A', link: '/fan-upgrade/QA' },
            { text: '安装后注意事项', link: '/fan-upgrade/post-install' },
            { text: '版本与版权', link: '/fan-upgrade/version' },
          ]
        }
      ],
      '/make-eyes/': [
        {
          text: '自制眼片',
          items: [
            { text: '前言', link: '/make-eyes/' },
            { text: '选择眼片制作方式', link: '/make-eyes/choose-your-eye' },
            { text: '准备眼片设计图', link: '/make-eyes/prepare-photo' },
            { text: '打样', link: '/make-eyes/pre-print' },
            { text: '印刷', link: '/make-eyes/print' },
            { text: '安装新眼片', link: '/make-eyes/install' },
            { text: 'Q&A', link: '/make-eyes/QA' },
            { text: '版本与版权', link: '/make-eyes/version' },
          ]
        }
      ]
    },
    outline: "deep",
    outlineTitle: "导航",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KazamoriIndustries/KigurumiFanUpgrade' }
    ]
  }
})
