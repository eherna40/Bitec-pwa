import { SET_CATEGORES } from "../constants/category";

  export const actionSetCategories = (categories, video) => ({
    type: SET_CATEGORES,
    categories,
    video,
  })
  