import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navigation.css'

/**
 * Renders the navigation bar component with links to different pages in the app.
 * @returns {JSX.Element} The navigation bar component.
 */
const Navigation = () => {
  const location = useLocation()

  return (
    <div className='navigation'>
      <Link to='/' className={location.pathname === '/home' ? 'navigation-item-active' : 'navigation-item'}>
        <FontAwesomeIcon className='navigation-icon' icon='fa-solid fa-house' />
        <div className='navigation-icon-text'>Home</div>
      </Link>
      <Link to='/users' className={location.pathname === '/users' ? 'navigation-item-active' : 'navigation-item'}>
        <FontAwesomeIcon className='navigation-icon' icon='fa-solid fa-users' />
        <div className='navigation-icon-text'>DB</div>
      </Link>
      <Link to='/jobs' className={location.pathname === '/jobs' ? 'navigation-item-active' : 'navigation-item'}>
        <FontAwesomeIcon className='navigation-icon' icon='fa-solid fa-clipboard' />
        <div className='navigation-icon-text'>Jobs</div>
      </Link>
      <Link
        to='/community'
        className={location.pathname === '/community' ? 'navigation-item-active' : 'navigation-item'}
      >
        <FontAwesomeIcon className='navigation-icon' icon='fa-solid fa-handshake' />
        <div className='navigation-icon-text'>Community</div>
      </Link>
      <Link to='/forum' className={location.pathname === '/forum' ? 'navigation-item-active' : 'navigation-item'}>
        <FontAwesomeIcon className='navigation-icon' icon='fa-solid fa-rectangle-list' />
        <div className='navigation-icon-text'>Forum</div>
      </Link>
    </div>
  )
}

export default Navigation
