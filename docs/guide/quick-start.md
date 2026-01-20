# Quick Start

Get up and running with TipTap YouTube Resize in minutes.

## Basic Usage

```typescript
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Youtube from '@tiptap/extension-youtube'
import YoutubeResize from '@anilkumarthakur/tiptap-extension-resize-youtube'

const editor = useEditor({
  extensions: [
    StarterKit,
    Youtube.configure({
      controls: true,
      nocookie: true
    }),
    YoutubeResize.configure({
      // Options here
    })
  ],
  content: `
    <h2>Resizable YouTube Video</h2>
    <p>Embed and resize YouTube videos directly in your editor!</p>
  `
})
```

## Template

```vue
<template>
  <div>
    <editor-content :editor="editor" />
  </div>
</template>
```

## Key Features

- 🎯 **Drag to Resize**: Click and drag video corners or edges to resize
- 📍 **Alignment Control**: Align videos to left, center, or right
- ⌨️ **Keyboard Support**: Full keyboard accessibility
- 🎨 **Responsive Design**: Videos scale properly on all devices

## Next Steps

- Explore [Setup and Configuration](./setup)
- Learn about all [Options](./options)
- Check the [API Reference](/api/extension)
