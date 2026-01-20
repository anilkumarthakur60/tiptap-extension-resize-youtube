<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Youtube from '@tiptap/extension-youtube'
import { YoutubeResize } from '../../src/package'

const editor = useEditor({
  extensions: [
    StarterKit,
    Youtube.configure({
      controls: true,
      nocookie: true
    }),
    YoutubeResize
  ],
  content: ``
})
</script>

<template>
  <div class="demo-container">
    <header class="demo-header">
      <h1>YouTube Video Resizer</h1>
      <p class="subtitle">Interactive demo of the Tiptap YouTube Resize Extension</p>
    </header>
    
    <div class="editor-wrapper">
      <div class="toolbar">
        <h3>Editor</h3>
        <p class="instructions">Click and drag the corner or edge handles on the video to resize it</p>
      </div>
      <EditorContent :editor="editor" class="editor" />
    </div>
  </div>
</template>
<!-- 
<style scoped>
.demo-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 2rem;
}

.demo-header h1 {
  margin: 0;
  font-size: 2.5rem;
  color: #1f2937;
  font-weight: 700;
}

.subtitle {
  margin: 0.5rem 0 0 0;
  color: #6b7280;
  font-size: 1rem;
}

.editor-wrapper {
  background: #fafafa;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.toolbar {
  padding: 1.5rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.toolbar h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #1f2937;
  font-weight: 600;
}

.instructions {
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
}

.editor {
  padding: 2rem;
  min-height: 400px;
}

.editor :deep() h2 {
  color: #1f2937;
  margin-top: 0;
}

.editor :deep() p {
  color: #374151;
  line-height: 1.6;
}

.editor :deep() iframe {
  border-radius: 4px;
  max-width: 100%;
}
</style> -->
