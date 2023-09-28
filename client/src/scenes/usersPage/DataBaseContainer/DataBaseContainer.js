import { useContext } from 'react'

import UserCard from '../UserCard/UserCard'
import './DataBaseContainer.css'
import { usersDbDataContext } from '../index.js'

function DataBaseContainer() {
  const { presentedData } = useContext(usersDbDataContext)
  return (
    <div className='database-container'>
      {presentedData && presentedData.map((user) => <UserCard key={user._id} userData={user} />)}
    </div>
  )
}

export default DataBaseContainer
