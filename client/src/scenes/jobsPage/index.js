import { useContext, useState, useEffect, createContext } from 'react'
import { globalAuthContext } from '../../state/state.js'
import { companiesDataContext } from '../../state/state.js'
import fetchData from '../../utils/fetchData.js'
import useLocalStorageState from '../../hooks/useLocalStorageState.js'
import FeedContainer from './FeedContainer/FeedContainer'
import Searchbar from './Searchbar/Searchbar'

export const jobsDataContext = createContext()

const JobsPage = () => {
  const { setToken, setSignedUserData, token, handleExpiredToken } = useContext(globalAuthContext)
  const { companiesData, setCompaniesData } = useContext(companiesDataContext)
  const [jobsData, setJobsData] = useLocalStorageState('jobs_data', [])
  const [presentedJobsData, setPresentedJobsData] = useState(jobsData || [])

  useEffect(() => {
    fetchData(
      '/jobs',
      { headers: { Authorization: `Bearer ${token}` } },
      (resJsonData) => {
        setJobsData(resJsonData)
        setPresentedJobsData(resJsonData)
      },
      setToken,
      setSignedUserData
    )

    fetchData(
      '/companies',
      { headers: { Authorization: `Bearer ${token}` } },
      (resJsonData) => {
        setCompaniesData(resJsonData)
      },
      setToken,
      setSignedUserData
    )
  }, [])

  return (
    <>
      <jobsDataContext.Provider
        value={{
          jobsData,
          setJobsData,
          presentedJobsData,
          setPresentedJobsData
        }}
      >
        <Searchbar />
        <FeedContainer />
      </jobsDataContext.Provider>
    </>
  )
}

export default JobsPage
