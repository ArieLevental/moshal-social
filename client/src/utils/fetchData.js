import handleExpiredToken from './authUtils'
// import { API_BASE_URL } from './constants'

const fetchData = async (route, options, onSuccess, setToken = null, setSignedUserData = null) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}${route}`

  try {
    const response = await fetch(url, options)

    if (response.ok) {
      const resJsonData = await response.json()
      onSuccess(resJsonData)
    } else if (response.status === 401 && setToken && setSignedUserData) {
      console.log('You are not authorized to view this page')
      handleExpiredToken(setToken, setSignedUserData)
    } else {
      console.error('PLACEHOLDER: Some error from server')
    }
  } catch (error) {
    console.error({ msg: `Error fetching data from ${url}`, error })
  }
}

export default fetchData
