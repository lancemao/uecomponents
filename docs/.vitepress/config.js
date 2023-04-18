import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unreal Components",
  base: '/uecomponents/',
  description: "Simple & Easy components for Unreal Engine",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', 
        items: [
          { text: 'Turnstile', link: '/turnstile/' },
        ] 
      }
    ],

    sidebar: [
      {
        text: 'Turnstile',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/turnstile/' },
          { text: 'Editor Parameter', link: '/turnstile/parameter' },
          { text: 'Blueprint APIs', link: '/turnstile/bpapis' }
        ]
      }
    ]
  }
})
