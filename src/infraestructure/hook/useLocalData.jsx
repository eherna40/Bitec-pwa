import { useDispatch } from "react-redux";
import { actionSetCategories } from "../redux/actions/category";
import useBlob from "./useBlob";

const useLocalData = () => {

    const dispatch = useDispatch()
    const { makeFetch } = useBlob()



    const savePrincipalVideo = async (url) => {
        try {
            const res = await makeFetch(url)
            return res
        } catch (error) {
            return false
        }


    }

    const saveProducts = async (categories) => {
        let category = []
        for (let index = 0; index < categories.length; index++) {
            if(categories[index].cover){
                const res = await makeFetch(categories[index].cover)
                categories[index][`data_${categories[index].id}`] = res
            }
            for (let e = 0; e < categories[index].subcategories.length; e++) {
               const subcategory = categories[index].subcategories[e]
               for (let p = 0; p < subcategory.products.length; p++) {
                    const product = subcategory.products[p]
                    const compare = await makeFetch(product.compare)
                    console.log(compare)
                    product[`compare_${product.id}`] = compare
                    if(product.images){
                        for (let i = 0; i < product.images.length; i++) {
                            const image = await makeFetch(product.images[i].url)
                            product.images[i].url_bolb = image
                        }
                    }

                    if(product.is_virtual){
                        const video = await makeFetch(product.url)
                        product.video_blob = video
                    }
                    subcategory.products[p] = product
               }
               categories[index].subcategories[e] = subcategory

            }
            category.push(categories[index])

        }
        return category
    }

    const saveData = async (data) => {
        const { url, categories } = data
        const video = await savePrincipalVideo(url)
        const products = await saveProducts(categories)
        dispatch(actionSetCategories(products, video))
        return products
    }

    return {
        saveData
    }
}

export default useLocalData