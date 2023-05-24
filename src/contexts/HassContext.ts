import { createContext } from 'preact'
import { HassContextValues } from '../types/HassContextValues'

export const HassContext = createContext<Partial<HassContextValues>>({})
