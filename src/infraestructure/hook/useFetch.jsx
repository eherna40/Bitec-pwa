import { useState } from 'react'
import { api, baseUrl, methods } from '../api/config'
export default function useFetch(endpoint, method = 'POST') {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)
    const url = baseUrl + api + methods[endpoint]
  const doFetch = async (variables = {}) => {
    let {  options } = variables
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(url, {
        method,
        ...options,
      })
      if (res.ok) {
        const json = await res.json()
        setData(json.data)
        return {
          data: json.data,
        }
      }
      setError(true)
      return {
        errors: true,
      }
    } catch (e) {
      setError(e)
      return {
        errors: e.message,
      }
    } finally {
      setLoading(false)
    }
  }

  return [doFetch, { loading, data, error }]
}