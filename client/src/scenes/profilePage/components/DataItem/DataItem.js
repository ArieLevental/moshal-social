import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './DataItem.css'

const DataItem = ({ faIconName, itemLabel, itemValue }) => {
  return (
    <div className='profile-page-data-item'>
      <div className='profile-page-data-item-label'>
        <FontAwesomeIcon icon={faIconName} /> <strong>{itemLabel}:</strong>{' '}
      </div>
      <div className='profile-page-data-item-input'>{itemValue || 'Not provided'}</div>
    </div>
  )
}

export default DataItem
