import { useContext, useEffect } from 'react'
import { generalDataContext, globalAuthContext } from '../state/state'
import fetchData from '../utils/fetchData'

// const shouldRefreshData = (key, delayInSeconds = 30) => {
//   console.log(requestCache)
//   const lastRequestTime = requestCache[key]
//   if (!lastRequestTime) {
//     return true // No previous request, so don't delay
//   }

//   const currentTime = new Date().getTime()
//   const elapsedTime = (currentTime - lastRequestTime) / 1000 // Convert to seconds

//   return elapsedTime >= delayInSeconds
// }

// export const fetchUsersDbData = (token, onSuccess, setToken, setSignedUserData) => {
//   if (shouldRefreshData('users_db_data')) {
//     fetchData('/users', { headers: { Authorization: `Bearer ${token}` } }, onSuccess, setToken, setSignedUserData)
//   }
// }

const useShouldRefresh = (key, delayInSeconds = 30) => {
  const { requestCache } = useContext(generalDataContext)
  const lastRequestTime = requestCache[key]
  if (!lastRequestTime) {
    return true // No previous request, so don't delay
  }

  const currentTime = new Date().getTime()
  const elapsedTime = (currentTime - lastRequestTime) / 1000 // Convert to seconds
  return elapsedTime >= delayInSeconds
}

const useFetchCache = (route, onSuccess) => {
  const { token, setToken, setSignedUserData } = useContext(globalAuthContext)
  const { requestCache, setRequestCache } = useContext(generalDataContext)
  const shouldRefresh = useShouldRefresh(route)

  useEffect(() => {
    if (shouldRefresh) {
      fetchData(route, { headers: { Authorization: `Bearer ${token}` } }, onSuccess, setToken, setSignedUserData)
      setRequestCache({ ...requestCache, [route]: new Date().getTime() })
      // console.log('refreshed', route)
    }
  }, [])
}

export default useFetchCache
