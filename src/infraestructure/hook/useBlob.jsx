const useBlob = () => {
    const makeFetch = async (url) => {
        try {
            const res = await fetch(url)
                .then(res => res.blob())
                .then(res => res)

            return res
        } catch (error) {
            return false
        }

    }
    return {
        makeFetch
    }
}

export default useBlob