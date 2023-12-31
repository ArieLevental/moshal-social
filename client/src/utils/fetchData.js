import handleExpiredToken from './authUtils'
import { errorToast } from './toastUtils'
// import { API_BASE_URL } from './constants'

const fetchData = async (route, options, onSuccess, setToken = null, setSignedUserData = null) => {
  const url = `${process.env.REACT_APP_API_BASE_URL}${route}`

  try {
    const response = await fetch(url, options)

    const resJsonData = await response.json()
    if (response.ok) {
      onSuccess(resJsonData)
    } else if (response.status === 401 && setToken && setSignedUserData) {
      errorToast('You are not authorized to view this page. Please Log in.')
      handleExpiredToken(setToken, setSignedUserData)
    } else {
      errorToast(resJsonData.message)
    }
  } catch (error) {
    console.error({ msg: `Error fetching data from ${url}`, error })
  }
}

export default fetchData
