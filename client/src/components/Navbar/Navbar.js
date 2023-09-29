import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { globalAuthContext } from '../../state/state.js'
import Icons from './Icons/Icons'
import Navigation from './Navigation/Navigation'
import './Navbar.css'


const Navbar = () => {
  const { setToken, setSignedUserData, signedUserData, token, handleExpiredToken } = useContext(globalAuthContext)
  const handleLogout = () => {
    handleExpiredToken(setToken, setSignedUserData)
  }
        

  return (
    <div className='navbar'>
      <Link to='/' className='navbar-logo'>
        <img className='navbar-logo-img' src='/assets/logos/moshal/moshal-white.png' alt='Moshal Logo' />
      </Link>

      {/* Check if user is authenticated */}
      {token && (
        <>
          <Navigation />
          <Icons
            signedUserId={signedUserData._id}
            signedUserPicturePath={signedUserData.picturePath}
            handleLogout={handleLogout}
            className='navbar-icons'
          />
        </>
      )}
    </div>
  )
}

export default Navbar
