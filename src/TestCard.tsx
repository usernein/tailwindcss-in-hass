import { HomeAssistant } from 'custom-card-helpers'
import { render } from 'preact'
import { HaCard } from './components/HaCard'

export class TestCard extends HTMLElement {
  _hass: HomeAssistant | undefined
  _config: any

  connectedCallback() {
    this._render()
  }

  _render () {
    if (!this._hass || !this._config) {
      // return
    }
    render(<HaCard hass={this._hass} config={this._config} card={this} />, this)
  }

  _deRender () {
    this.innerHTML = ''
    render('', this)
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
