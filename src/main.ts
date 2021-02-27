// src/main.ts

import { showUI } from '@create-figma-plugin/utilities'

export default function () {
  const options = { width: 240, height: 120 }
  const data = { greeting: 'Hello, World!' }
  showUI(options, data)
}
