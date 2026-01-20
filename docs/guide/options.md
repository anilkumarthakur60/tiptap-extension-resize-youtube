# Configuration Options

Configure the YoutubeResize extension with these options:

## Available Options

### `minWidth`

Minimum width for resized videos.

- **Type:** `number`
- **Default:** `200`
- **Unit:** pixels

```typescript
YoutubeResize.configure({
  minWidth: 300
})
```

### `minHeight`

Minimum height for resized videos.

- **Type:** `number`
- **Default:** `112`
- **Unit:** pixels

```typescript
YoutubeResize.configure({
  minHeight: 150
})
```

### `maxWidth`

Maximum width for resized videos.

- **Type:** `number`
- **Default:** `800`
- **Unit:** pixels

```typescript
YoutubeResize.configure({
  maxWidth: 1200
})
```

### `maxHeight`

Maximum height for resized videos.

- **Type:** `number`
- **Default:** `600`
- **Unit:** pixels

```typescript
YoutubeResize.configure({
  maxHeight: 900
})
```

## Complete Configuration Example

```typescript
YoutubeResize.configure({
  minWidth: 250,
  minHeight: 140,
  maxWidth: 1000,
  maxHeight: 700
})
```

## Default Values

```typescript
{
  minWidth: 200,
  minHeight: 112,
  maxWidth: 800,
  maxHeight: 600,
}
```
