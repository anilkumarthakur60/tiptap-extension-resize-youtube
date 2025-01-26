import Youtube from '@tiptap/extension-youtube'

export const YoutubeResize = Youtube.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      style: {
        default: 'width: 560px; height: 315px; cursor: pointer;',
        parseHTML: (element) => element.style.cssText || ''
      }
    }
  },

  addNodeView() {
    return ({ node, editor, getPos }) => {
      const { view } = editor
      const { style } = node.attrs

      // Create Elements
      const $wrapper = document.createElement('div')
      const $container = document.createElement('div')
      const $iframe = document.createElement('iframe')

      $wrapper.style.display = 'flex'
      $container.style.cssText = `${style}; position: relative; display: inline-block;`
      $iframe.style.cssText = 'width: 100%; height: 100%; display: block;'

      $container.appendChild($iframe)
      $wrapper.appendChild($container)

      Object.entries(node.attrs).forEach(([key, value]) => {
        if (value) $iframe.setAttribute(key, value)
      })

      if (!editor.isEditable) return { dom: $container }

      // Helper Function to Update Node Attributes
      const updateNodeAttrs = () => {
        if (typeof getPos === 'function') {
          view.dispatch(
            view.state.tr.setNodeMarkup(getPos(), null, {
              ...node.attrs,
              style: $iframe.style.cssText
            })
          )
        }
      }

      // Create Alignment Controls
      const createAlignmentControls = () => {
        if ($container.dataset.alignmentActive) return

        const $positionController = document.createElement('div')
        $positionController.style.cssText =
          'position: absolute; top: -30px; left: 50%; transform: translateX(-50%); width: 120px; height: 30px; z-index: 999; background-color: rgba(255, 255, 255, 0.8); border-radius: 4px; border: 1px solid #6C6C6C; display: flex; justify-content: space-around; align-items: center; padding: 5px;'

        const alignments = [
          {
            src: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/format_align_left/default/20px.svg',
            margin: '0 auto 0 0'
          },
          {
            src: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/format_align_center/default/20px.svg',
            margin: '0 auto'
          },
          {
            src: 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/format_align_right/default/20px.svg',
            margin: '0 0 0 auto'
          }
        ]

        alignments.forEach(({ src, margin }) => {
          const $button = document.createElement('img')
          $button.src = src
          $button.style.cssText =
            'width: 24px; height: 24px; cursor: pointer; opacity: 1; transition: opacity 0.2s;'

          $button.addEventListener('mouseover', () => ($button.style.opacity = '0.6'))
          $button.addEventListener('mouseout', () => ($button.style.opacity = '1'))
          $button.addEventListener('click', () => {
            $iframe.style.margin = margin
            updateNodeAttrs()
          })

          $positionController.appendChild($button)
        })

        $container.appendChild($positionController)
        $container.dataset.alignmentActive = 'true'
      }

      // Start Resizing Function
      const startResize = (e: MouseEvent, index: number) => {
        e.preventDefault()
        let isResizing = true
        const startX = e.clientX
        const startY = e.clientY
        const startWidth = $container.offsetWidth
        const startHeight = $container.offsetHeight

        const onMouseMove = (e: MouseEvent) => {
          if (!isResizing) return

          let newWidth = startWidth
          let newHeight = startHeight

          if (index === 0 || index === 2) {
            newWidth -= e.clientX - startX
          } else {
            newWidth += e.clientX - startX
          }

          if (index === 0 || index === 1) {
            newHeight -= e.clientY - startY
          } else {
            newHeight += e.clientY - startY
          }

          newWidth = Math.max(150, newWidth)
          newHeight = Math.max(100, newHeight)

          $container.style.width = `${newWidth}px`
          $container.style.height = `${newHeight}px`
          $iframe.style.width = `${newWidth}px`
          $iframe.style.height = `${newHeight}px`
        }

        const onMouseUp = () => {
          isResizing = false
          updateNodeAttrs()
          document.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
        }

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
      }

      // Add Resizer Dots
      const addResizeDots = () => {
        if ($container.dataset.resizeActive) return

        const dotPositions = [
          { top: '-6px', left: '-6px', cursor: 'nwse-resize' },
          { top: '-6px', right: '-6px', cursor: 'nesw-resize' },
          { bottom: '-6px', left: '-6px', cursor: 'nesw-resize' },
          { bottom: '-6px', right: '-6px', cursor: 'nwse-resize' }
        ]

        dotPositions.forEach((pos, index) => {
          const $dot = document.createElement('div')
          $dot.style.cssText = `
            position: absolute;
            width: 12px;
            height: 12px;
            background: white;
            border: 2px solid #6C6C6C;
            border-radius: 50%;
            z-index: 10;
            cursor: ${pos.cursor};
          `
          Object.assign($dot.style, pos)
          $dot.addEventListener('mousedown', (e) => startResize(e, index))
          $container.appendChild($dot)
        })

        $container.dataset.resizeActive = 'true'
      }

      // Click to Add Controls
      $container.addEventListener('click', () => {
        createAlignmentControls()
        addResizeDots()
      })

      // Hide Controls on Outside Click
      document.addEventListener('click', (e: MouseEvent) => {
        if (!$container.contains(e.target as Node)) {
          $container.querySelectorAll('div').forEach((el) => el.remove())
          $container.dataset.alignmentActive = ''
          $container.dataset.resizeActive = ''
        }
      })

      return { dom: $wrapper }
    }
  }
})
