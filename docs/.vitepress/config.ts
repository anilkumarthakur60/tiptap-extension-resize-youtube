import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/tiptap-extension-resize-youtube/',
  title: 'TipTap YouTube Resize',
  description: 'Resizable YouTube embed extension for TipTap',
  head: [
    ['meta', { name: 'theme-color', content: '#3c3c3d' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:title', content: 'TipTap YouTube Resize' }],
    ['meta', { name: 'og:description', content: 'Resizable YouTube embed extension for TipTap with drag controls and alignment options' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/anilkumarthakur60/tiptap-extension-resize-youtube' },
          { text: 'NPM', link: 'https://www.npmjs.com/package/@anilkumarthakur/tiptap-extension-resize-youtube' },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
          ],
        },
        {
          text: 'Usage',
          items: [
            { text: 'Basic Setup', link: '/guide/setup' },
            { text: 'Options', link: '/guide/options' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Extension', link: '/api/extension' },
            { text: 'Options', link: '/api/options' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/anilkumarthakur60/tiptap-extension-resize-youtube' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Anil Kumar Thakur',
    },
  },
})
