import handleExpiredToken from './authUtils'
import { defaultToast, errorToast } from './toastUtils'
import { API_BASE_URL } from './constants'

const fetchData = async (route, options, onSuccess, setToken = null, setSignedUserData = null) => {
  const url = `${API_BASE_URL}${route}`

  try {
    const response = await fetch(url, options)

    const resJsonData = await response.json()
    if (response.ok) {
      onSuccess(resJsonData)
    } else if (response.status === 401 && setToken && setSignedUserData) {
      // console.log('You are not authorized to view this page')
      errorToast('You are not authorized to view this page. Please Log in.')
      handleExpiredToken(setToken, setSignedUserData)
    } else {
      // console.error('PLACEHOLDER: Some error from server')
      errorToast(resJsonData.message)
    }
  } catch (error) {
    console.error({ msg: `Error fetching data from ${url}`, error })
  }
}

export default fetchData
