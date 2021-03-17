import * as localForage from "localforage";
import useBlob from "./useBlob";

const useLocalData = () => {

    const { makeFetch } = useBlob()
    const setItem = async (key, value) => {
        return await localForage.setItem(key, value).then(res => res)
    }

    const getItem = (key) => {
        localForage.getItem('keys', function (err, value) {
            console.log(value, err)
            var url = URL.createObjectURL(value);
            console.log(url)
        });
    }

    const savePrincipalVideo = async (url) => {
        try {
            const res = await makeFetch(url)
            return setItem('principal', res).then(res => res)
        } catch (error) {
            return false
        }


    }

    const saveProducts = async (categories) => {
        let covers = {}
        let category = []
        for (let index = 0; index < categories.length; index++) {
            const res = await makeFetch(categories[index].cover)
            covers = {
                ...covers,
                [categories[index].id]: res
            }
            const subcategories = categories[index].subcategories
            for (let index = 0; index < subcategories.length; index++) {
                console.log(subcategories[index])
            }
        }
        setItem('covers', covers)
    }

    const saveData = async (data) => {

        const { url, categories } = data
        ///primero guardamos el video principal
        const primary = await savePrincipalVideo(url)
        const products = saveProducts(categories)
    }

    return {
        saveData
    }
}

export default useLocalData