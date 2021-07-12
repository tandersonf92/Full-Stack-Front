import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'

function useRequestData(initialState, finalUrl) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    axios.get(`${BASE_URL}${finalUrl}`, {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        setData(res.data)
      }).catch((err) => {
        alert(err.response.data.message)
      })
  }, [finalUrl])

  return data
}

export default useRequestData