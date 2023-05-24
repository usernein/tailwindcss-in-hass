import { HomeAssistant } from "custom-card-helpers"
import { TestCard } from "../TestCard"

export type HassContextValues = {
  hass: HomeAssistant | undefined
  config: any
  card: TestCard
}