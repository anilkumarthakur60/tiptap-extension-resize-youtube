# API Configuration

## Extension Configuration Object

### Structure

```typescript
interface YoutubeResizeOptions {
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
}
```

## Detailed Parameter Reference

### minWidth

- **Type:** `number`
- **Default:** `200`
- **Description:** Sets the minimum width constraint (in pixels) for resized YouTube videos
- **Example:**
  ```typescript
  YoutubeResize.configure({ minWidth: 300 })
  ```

### minHeight

- **Type:** `number`
- **Default:** `112`
- **Description:** Sets the minimum height constraint (in pixels) for resized YouTube videos
- **Example:**
  ```typescript
  YoutubeResize.configure({ minHeight: 150 })
  ```

### maxWidth

- **Type:** `number`
- **Default:** `800`
- **Description:** Sets the maximum width constraint (in pixels) for resized YouTube videos
- **Example:**
  ```typescript
  YoutubeResize.configure({ maxWidth: 1200 })
  ```

### maxHeight

- **Type:** `number`
- **Default:** `600`
- **Description:** Sets the maximum height constraint (in pixels) for resized YouTube videos
- **Example:**
  ```typescript
  YoutubeResize.configure({ maxHeight: 900 })
  ```

## Complete Configuration Example

```typescript
import { useEditor } from '@tiptap/vue-3'
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
      minWidth: 250,
      minHeight: 140,
      maxWidth: 1000,
      maxHeight: 700
    })
  ]
})
```

## TypeScript Support

Full TypeScript support is available:

```typescript
import type YoutubeResize from '@anilkumarthakur/tiptap-extension-resize-youtube'

const config: Parameters<typeof YoutubeResize.configure>[0] = {
  minWidth: 300,
  maxWidth: 1000
}
```
