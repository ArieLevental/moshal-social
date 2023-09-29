import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useLocalStorageState from '../../hooks/useLocalStorageState.js'
import { globalAuthContext } from '../../state/state.js'
import { HomepageMainText } from '../../utils/texts.js'
import fetchData from '../../utils/fetchData.js'
import './index.css'

const HomePage = () => {
  const { setSignedUserData, setToken, token } = useContext(globalAuthContext)
  const [usersDbData, setUsersDbData] = useLocalStorageState('users_db_data', [])
  let birthdayMode = false

  useEffect(() => {
    fetchData(
      '/users',
      { headers: { Authorization: `Bearer ${token}` } },
      (resJsonData) => {
        setUsersDbData(resJsonData)
      },
      setToken,
      setSignedUserData
    )
  }, [])

  const bornTodayUsers = usersDbData.map((user) => {
    const userDateOfBirth = new Date(user.dateOfBirth)
    const today = new Date()
    if (userDateOfBirth.getDate() === today.getDate() && userDateOfBirth.getMonth() === today.getMonth()) {
      birthdayMode = true
      return (
        <div className='born-today-user' key={user._id || user.id}>
          <Link href={`/user/${user._id}`}>
            <img
              className='born-today-user-img'
              src={user.picturePath || './assets/general/genericUser.png'}
              alt='user'
            />
            <div className='born-today-user-name'>
              {user.firstName} {user.lastName}
            </div>
          </Link>
        </div>
      )
    }
    return null
  })

  return (
    <div className='homepage-container'>
      <Carousel
        className='homepage-carousel'
        autoPlay
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        stopOnHover={false}
      >
        <img src='./assets/homepage-carousel/image1.jpg' alt='bg1' />
        <img src='./assets/homepage-carousel/image2.jpg' alt='bg2' />
        <img src='./assets/homepage-carousel/image3.jpg' alt='bg3' />
      </Carousel>
      <div className='homepage-paragraph'>
        <HomepageMainText />
      </div>
      <div className='born-today-widget'>
        <div className='born-today-title'>Born today</div>
        <div className='born-today-container'>
          {birthdayMode ? (
            bornTodayUsers
          ) : (
            <div className='no-users-born-today-message'>No users celebrate their birthday today.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
