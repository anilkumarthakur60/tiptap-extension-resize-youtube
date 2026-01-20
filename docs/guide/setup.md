# Setup

## Complete Setup Example

Here's a complete example of how to set up TipTap with the YouTube Resize extension.

### Vue 3 + TypeScript

```typescript
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Youtube from '@tiptap/extension-youtube'
import YoutubeResize from '@anilkumarthakur/tiptap-extension-resize-youtube'

export default {
  components: {
    EditorContent
  },
  setup() {
    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          paragraph: {
            HTMLAttributes: {
              class: 'text-base'
            }
          }
        }),
        Youtube.configure({
          controls: true,
          nocookie: false
        }),
        YoutubeResize.configure({
          // Your configuration options
        })
      ],
      content: `
        <h1>Welcome to TipTap Editor</h1>
        <p>Try embedding a YouTube video and resizing it!</p>
      `
    })

    return {
      editor
    }
  }
}
```

### React

```typescript
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Youtube from '@tiptap/extension-youtube'
import YoutubeResize from '@anilkumarthakur/tiptap-extension-resize-youtube'

export const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Youtube.configure({
        controls: true,
        nocookie: true,
      }),
      YoutubeResize.configure({
        // Your configuration options
      }),
    ],
    content: `<p>Start editing your content here...</p>`,
  })

  return <EditorContent editor={editor} />
}
```

## Styling

Add CSS to style the resizable YouTube wrapper:

```css
.tiptap-youtube-resizable {
  position: relative;
  overflow: hidden;
}

.tiptap-youtube-resizable iframe {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

/* Hover effect - make it more prominent on hover */
.tiptap-youtube-resizable:hover iframe {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.tiptap-youtube-resize-handle {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #3b82f6;
  cursor: se-resize;
  bottom: 0;
  right: 0;
}
```

## Interactive Behavior

The extension provides an intuitive user experience:

1. **Hover Over Video** - Move your mouse over any embedded YouTube video to reveal:
   - Resize handles (corner dots)
   - Alignment controls (left, center, right)

2. **Resize Video** - Drag the corner handles to adjust dimensions

3. **Align Video** - Click alignment buttons to position the video

4. **Hide Controls** - Move your mouse away or click outside to hide controls

## Next Steps

- Review the [Options](./options) available
- Check out [API Reference](/api/extension)
