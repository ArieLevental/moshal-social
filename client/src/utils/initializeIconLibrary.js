import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
  faBan,
  faBriefcase,
  faCakeCandles,
  faCheck,
  faClipboard,
  faClock,
  faEnvelope,
  faGear,
  faHandshake,
  faHeart,
  faHouse,
  faLocationDot,
  faPen,
  faPhoneVolume,
  faRectangleList,
  faRightFromBracket,
  faTrash,
  faUser,
  faUsers,
  faFaceSurprise,
  faHandPointLeft
} from '@fortawesome/free-solid-svg-icons'

const initializeIconLibrary = () => {
  library.add(
    faBan,
    faCakeCandles,
    faLocationDot,
    faPhoneVolume,
    faBriefcase,
    faCheck,
    faWhatsapp,
    faFacebook,
    faInstagram,
    faYoutube,
    faLinkedin,
    faPen,
    faTrash,
    faGear,
    faEnvelope,
    faRightFromBracket,
    faHouse,
    faUsers,
    faClipboard,
    faHandshake,
    faRectangleList,
    faClock,
    faHeart,
    faUser,
    faFaceSurprise,
    faHandPointLeft
  )
}

export default initializeIconLibrary
