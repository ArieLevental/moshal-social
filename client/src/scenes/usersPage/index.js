// import { useState, useEffect, useContext, createContext } from 'react'
import { useState, useContext, createContext } from 'react'

import useLocalStorageState from '../../hooks/useLocalStorageState'
import useFetchCache from '../../hooks/useFetchCache'
// import fetchData from '../../utils/fetchData.js'

import DataBaseContainer from './DataBaseContainer/DataBaseContainer'
import Searchbar from './Searchbar/Searchbar'

// import { companiesDataContext, globalAuthContext, institutionsDataContext } from '../../state/state.js'
import { companiesDataContext, institutionsDataContext } from '../../state/state.js'

export const usersDbDataContext = createContext()

function UsersPage() {
  // const { setSignedUserData, token, setToken } = useContext(globalAuthContext)
  const [usersDbData, setUsersDbData] = useLocalStorageState('users_db_data', [])

  const { institutionsData, setInstitutionsData } = useContext(institutionsDataContext)
  const { companiesData, setCompaniesData } = useContext(companiesDataContext)
  const [presentedData, setPresentedData] = useState(usersDbData)

  useFetchCache('/users', (resJsonData) => {
    setUsersDbData(resJsonData)
    setPresentedData(resJsonData)
  })

  useFetchCache('/institutions', (resJsonData) => {
    setInstitutionsData(resJsonData)
  })

  useFetchCache('/companies', (resJsonData) => {
    setCompaniesData(resJsonData)
  })

  // useEffect(() => {
  //   fetchData(
  //     '/users',
  //     { headers: { Authorization: `Bearer ${token}` } },
  //     (resJsonData) => {
  //       setUsersDbData(resJsonData)
  //       setPresentedData(resJsonData)
  //     },
  //     setToken,
  //     setSignedUserData
  //   )

  //   fetchData(
  //     '/institutions',
  //     { headers: { Authorization: `Bearer ${token}` } },
  //     (resJsonData) => {
  //       setInstitutionsData(resJsonData)
  //     },
  //     setToken,
  //     setSignedUserData
  //   )

  //   fetchData(
  //     '/companies',
  //     { headers: { Authorization: `Bearer ${token}` } },
  //     (resJsonData) => {
  //       setCompaniesData(resJsonData)
  //     },
  //     setToken,
  //     setSignedUserData
  //   )
  // }, [])

  return (
    <>
      <usersDbDataContext.Provider value={{ usersDbData, setUsersDbData, presentedData, setPresentedData }}>
        <Searchbar institutionsData={institutionsData} companiesData={companiesData} />
        <DataBaseContainer />
      </usersDbDataContext.Provider>
    </>
  )
}

export default UsersPage
