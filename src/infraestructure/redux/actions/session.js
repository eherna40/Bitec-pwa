import { OFF_VIDEO, ON_VIDEO } from "../constants/session"

  export const actionOnVideo = () => ({
    type: ON_VIDEO,
    onVideo: true
  })
  

export const actionOFFVideo = () => ({
  type: OFF_VIDEO,
  onVideo: false
})
