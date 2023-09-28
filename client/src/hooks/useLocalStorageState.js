import { useState, useEffect } from 'react'

const useLocalStorageState = (key, defaultValue) => {
  let localStorageValue
  try {
    localStorageValue = JSON.parse(localStorage.getItem(key))
  } catch (error) {
    //
  }

  const [state, setState] = useState(localStorageValue ? localStorageValue : defaultValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default useLocalStorageState
