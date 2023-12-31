// import { API_BASE_URL } from './constants'
import { defaultToast } from './toastUtils'

const handleExpiredToken = (setToken, setSignedUserData) => {
  try {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  } catch (error) {
    console.error({ msg: 'Error logging out', error })
  } finally {
    setToken(null)
    setSignedUserData(null)
    localStorage.removeItem('token')
    localStorage.removeItem('signedUserData')
    defaultToast('You have been logged out', '👋')
  }
}

export default handleExpiredToken
