import { HomeAssistant } from 'custom-card-helpers'
import { HassContext } from '../../contexts/HassContext'
import { TestCard } from '../../TestCard'
import { CardContent } from '../CardContent'

export function HaCard ({
  hass,
  config,
  card
}: {
  hass: HomeAssistant | undefined
  config: any
  card: TestCard
}) {
  return (
    <HassContext.Provider value={{ hass, config, card }}>
      {/* @ts-ignore */}
      <ha-card>
        <CardContent />
        {/* @ts-ignore */}
      </ha-card>
    </HassContext.Provider>
  )
}
