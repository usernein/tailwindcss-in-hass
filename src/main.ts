import './index.css'
import { TestCard } from './TestCard'
import { HassWindow } from './types/HassWindow'

declare let window: HassWindow

customElements.define('test-card', TestCard)

window.customCards.push({
  type: 'test-card',
  name: 'Test Card',
  description: 'Test Card Description',
  preview: false
})
