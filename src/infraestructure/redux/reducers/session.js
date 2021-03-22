import { SET_CATEGORES } from '../constants/category'
import { OFF_TIMER, ON_TIMER } from '../constants/session'

const initialState = {
  onVideo
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_TIMER:
        return {
            ...state,
           onVideo: true
        }
    case OFF_TIMER:
      return {
        ...state,
        onVideo: false
      }
    default:
      return state
  }
}

export default categoryReducer