import { API_BASE_URL } from './constants'

const handleExpiredToken = (setToken, setSignedUserData) => {
  try {
    fetch(`${API_BASE_URL}/auth/logout`, {
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
  }
}

export default handleExpiredToken
