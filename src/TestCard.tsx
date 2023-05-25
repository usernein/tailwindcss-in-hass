import { HomeAssistant } from 'custom-card-helpers'
import { render } from 'preact'
import { HaCard } from './components/HaCard'
import config from '../twind.config'
import { twind, cssom, observe } from '@twind/core'
// support shadowroot.adoptedStyleSheets in all browsers
import 'construct-style-sheets-polyfill'

export class TestCard extends HTMLElement {
  _hass: HomeAssistant | undefined
  _config: any
  shadow: ShadowRoot

  constructor () {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })

    const sheet = cssom(new CSSStyleSheet())

    const tw = twind(config, sheet)
    this.shadow.adoptedStyleSheets = [sheet.target]
    observe(tw, this.shadow)
  }

  connectedCallback () {
    this._render()
  }

  _render () {
    if (!this._hass || !this._config) {
      // return
    }
    render(
      <HaCard hass={this._hass} config={this._config} card={this} />,
      this.shadow
    )
  }

  _deRender () {
    this.shadow.innerHTML = ''
    render('', this.shadow)
  }

  set hass (hass: HomeAssistant) {
    this._hass = hass
    this._render()
  }

  setConfig (config: any) {
    // if (!config.entity_id) {
    //   throw new Error('entity_id is required')
    // }
    this._config = config
    this._render()
  }

  getCardSize () {
    return 2
  }
}
