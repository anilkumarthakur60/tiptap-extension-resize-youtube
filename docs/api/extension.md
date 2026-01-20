# Extension API

## YoutubeResize

The main extension for adding resizable YouTube embed support to TipTap.

### Import

```typescript
import YoutubeResize from '@anilkumarthakur/tiptap-extension-resize-youtube'
```

### Configuration

Configure the extension using the `configure()` method:

```typescript
editor.registerExtension(
  YoutubeResize.configure({
    minWidth: 250,
    minHeight: 140,
    maxWidth: 1000,
    maxHeight: 700
  })
)
```

### Options

| Option      | Type     | Default | Description              |
| ----------- | -------- | ------- | ------------------------ |
| `minWidth`  | `number` | `200`   | Minimum width in pixels  |
| `minHeight` | `number` | `112`   | Minimum height in pixels |
| `maxWidth`  | `number` | `800`   | Maximum width in pixels  |
| `maxHeight` | `number` | `600`   | Maximum height in pixels |

### Methods

#### `register()`

Register the extension with the editor.

```typescript
const editor = useEditor({
  extensions: [StarterKit, Youtube, YoutubeResize]
})
```

### Storage

The extension stores information about resized videos in the editor state:

```typescript
// Access storage
const storage = editor.extensionManager.extensions.find(
  (ext) => ext.name === 'youtubeResize'
).storage
```

## Related

- [@tiptap/extension-youtube](https://tiptap.dev/api/nodes/youtube)
- [TipTap Documentation](https://tiptap.dev)
