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
    ],

    sidebar: [
      {
        items: [
          { text: '前言', link: '/fan-upgrade/' },
          { text: '安装前注意事项', link: '/fan-upgrade/warning' },
          { text: 'BOM（物料清单）范例', link: '/fan-upgrade/BOM' },
          { text: '安装步骤', link: '/fan-upgrade/install' },
          { text: 'Q&A', link: '/fan-upgrade/QA' },
          { text: '安装后注意事项', link: '/fan-upgrade/post-install' },
          { text: '版本与版权', link: '/fan-upgrade/version' },
        ]
      }
    ],
    outline: "deep",
    outlineTitle: "导航",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KazamoriIndustries/KigurumiFanUpgrade' }
    ]
  }
})
