import { SET_CATEGORES } from '../constants/category'

const initialState = {
    loading: false,
    error: false,
    data: [],
    video: null
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORES:
        return {
            ...state,
            data: action.categories,
            video: action.video
        }
    default:
      return state
  }
}

export default categoryReducer