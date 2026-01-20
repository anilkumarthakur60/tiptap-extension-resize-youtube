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
  content: `
    <h2>Try resizing a YouTube video</h2>
    <p>Click the video once, then drag the corner/edge handles to resize it.</p>
    <p>You can also insert a sample video using the button above.</p>
  `
})

function addSampleVideo() {
  editor.value
    ?.chain()
    .focus()
    .setYoutubeVideo({
      src: 'https://youtu.be/LitG4iAs_C0',
      width: 560,
      height: 315
    })
    .run()
}
</script>

<template>
  <div class="page">
    <div class="shell">
      <header class="hero">
        <div class="hero__text">
          <h1>YouTube Video Resizer</h1>
          <p class="subtitle">Interactive demo of the Tiptap YouTube Resize Extension</p>
        </div>

        <div class="hero__actions">
          <button class="btn btn--primary" type="button" @click="addSampleVideo">
            Insert sample video
          </button>
        </div>
      </header>

      <main class="grid">
        <section class="card">
          <div class="card__head">
            <div>
              <h3>Editor</h3>
              <p class="muted">Click the video, then drag the corner/edge handles to resize.</p>
            </div>

            <div class="badge">Resizable</div>
          </div>

          <div class="editorWrap">
            <EditorContent :editor="editor" class="editor" />
          </div>
        </section>

        <aside class="card card--side">
          <div class="card__head">
            <h3>Tips</h3>
          </div>

          <ul class="tips">
            <li>Click the video once to show resize handles.</li>
            <li>Drag corners to keep proportion, edges for free resize (if supported).</li>
            <li>Try different widths to test responsive behavior.</li>
          </ul>

          <div class="divider"></div>

          <p class="muted small">
            You can paste a YouTube URL directly if your extension supports it, or insert via
            command.
          </p>
        </aside>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* ---- Page background ---- */
.page {
  min-height: 100vh;
  padding: 32px 16px;
  background:
    radial-gradient(1200px 600px at 20% 0%, rgba(99, 102, 241, 0.18), transparent 60%),
    radial-gradient(900px 500px at 90% 10%, rgba(16, 185, 129, 0.14), transparent 55%),
    radial-gradient(800px 500px at 40% 100%, rgba(236, 72, 153, 0.12), transparent 60%), #0b1020;
  color: #e5e7eb;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    'Apple Color Emoji',
    'Segoe UI Emoji';
}

.shell {
  max-width: 1100px;
  margin: 0 auto;
}

/* ---- Header ---- */
.hero {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

.hero h1 {
  margin: 0;
  font-size: 28px;
  letter-spacing: 0.2px;
}

.subtitle {
  margin: 8px 0 0;
  color: rgba(229, 231, 235, 0.8);
  line-height: 1.4;
}

.hero__actions {
  display: flex;
  gap: 10px;
}

/* ---- Grid ---- */
.grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1.7fr 0.9fr;
  gap: 16px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .hero {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* ---- Cards ---- */
.card {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.card__head {
  padding: 16px 16px 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}

.card__head h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}

.muted {
  margin: 6px 0 0;
  color: rgba(229, 231, 235, 0.75);
  font-size: 13px;
}

.small {
  font-size: 12px;
}

/* ---- Badge ---- */
.badge {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(59, 130, 246, 0.35);
}

/* ---- Buttons ---- */
.btn {
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: #e5e7eb;
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.08s ease,
    background 0.15s ease,
    border-color 0.15s ease;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.22);
}

.btn:active {
  transform: translateY(1px);
}

.btn--primary {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(59, 130, 246, 0.92));
  border-color: rgba(99, 102, 241, 0.65);
}

/* ---- Editor ---- */
.editorWrap {
  padding: 16px;
}

.editor {
  min-height: 340px;
  border-radius: 14px;
  padding: 14px 14px;
  background: rgba(3, 7, 18, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Tiptap adds ProseMirror class internally */
.editor :deep(.ProseMirror) {
  outline: none;
  min-height: 310px;
  line-height: 1.6;
  color: #f3f4f6;
}

.editor :deep(.ProseMirror p) {
  margin: 0 0 12px;
}

.editor :deep(.ProseMirror h2) {
  margin: 0 0 10px;
  font-size: 20px;
}

.editor :deep(.ProseMirror a) {
  color: #93c5fd;
  text-decoration: underline;
}

/* Make YouTube embeds look nicer */
.editor :deep(.ProseMirror .youtube) {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

/* ---- Sidebar tips ---- */
.tips {
  margin: 10px 16px 16px;
  padding-left: 18px;
  color: rgba(229, 231, 235, 0.85);
  font-size: 13px;
  line-height: 1.6;
}

.divider {
  height: 1px;
  margin: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
}
</style>
