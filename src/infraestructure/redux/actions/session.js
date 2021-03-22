import { OFF_TIMER, ON_TIMER } from "../constants/session"

  export const actionOnTimer = () => ({
    type: ON_TIMER,
    onVideo: true
  })
  

export const actionOffTimer = () => ({
  type: OFF_TIMER,
  onVideo: false
})
