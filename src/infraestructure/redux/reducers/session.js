import { OFF_VIDEO, ON_VIDEO } from "../constants/session"

const initialState = {
  onVideo: false
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_VIDEO:
        return {
            ...state,
           onVideo: true
        }
    case OFF_VIDEO:
      return {
        ...state,
        onVideo: false
      }
    default:
      return state
  }
}

export default sessionReducer