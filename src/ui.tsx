// src/ui.tsx

import React from 'react'
import { render } from 'react-dom'

export default function (rootNode: HTMLElement, data: { greeting: string }) {
  render(<h1>{data.greeting}</h1>, rootNode)
}
