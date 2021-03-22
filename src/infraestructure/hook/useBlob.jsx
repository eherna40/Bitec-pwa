const useBlob = () => {
    const makeFetch = async (url) => {
        try {
            const res = await fetch(url)
                .then(res => {
                    if (res.ok && res.status === 404) {
                        return null
                    }
                    return res.blob()
                }
                )
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