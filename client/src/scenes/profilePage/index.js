import { useContext, useState, useEffect, createContext } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../utils/fetchData'
import imageCompression from 'browser-image-compression'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PictureEditForm from '../../components/Widgets/PictureEditForm/PictureEditForm'
import CategoryTitle from '../../components/Widgets/CategoryTitle/CategoryTitle'
import {
  companiesDataContext,
  generalDataContext,
  globalAuthContext,
  institutionsDataContext
} from '../../state/state.js'
import { capitalizeFirstLetters, formatDate } from '../../utils/formattingUtils'
import { GENERIC_PICTURE_PATH } from '../../utils/constants'

import ExperienceContainer from './experienceContainer/experienceContainer'
import DataItem from './components/DataItem/DataItem'
import './index.css'

export const userDataContext = createContext()

const ProfilePage = () => {
  const { israelCities } = useContext(generalDataContext)
  const { signedUserData, setSignedUserData, token, setToken } = useContext(globalAuthContext)
  const { institutionsData, setInstitutionsData } = useContext(institutionsDataContext)
  const { companiesData, setCompaniesData } = useContext(companiesDataContext)

  const { userId } = useParams()
  const [userData, setUserData] = useState(null)
  const [detailsFormData, setDetailsFormData] = useState(null)
  const [inEditMode, setInEditMode] = useState(false)
  const [inImgMode, setInImgMode] = useState(false)
  const [imgValue, setImgValue] = useState(null)
  // const [currentWorkplace, setCurrentWorkplace] = useState('')
  const [educationItems, setEducationItems] = useState([])
  const [occupationItems, setOccupationItems] = useState([])

  useEffect(() => {
    fetchData(
      '/institutions',
      { headers: { Authorization: `Bearer ${token}` } },
      (resJsonData) => {
        setInstitutionsData(resJsonData)
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

    fetchData(
      `/user/getEducationItems/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      (resJsonData) => {
        setEducationItems(resJsonData)
      },
      setToken,
      setSignedUserData
    )

    fetchData(
      `/user/getOccupationItems/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      (resJsonData) => {
        setOccupationItems(resJsonData)
      },
      setToken,
      setSignedUserData
    )
  }, [])

  useEffect(() => {
    fetchData(
      `/user/${userId}`,
      { headers: { Authorization: `Bearer ${token}` } },
      (resJsonData) => {
        setUserData(resJsonData)
        setDetailsFormData({
          location: resJsonData.location,
          linkedIn: resJsonData.linkedIn,
          bio: resJsonData.bio,
          dateOfBirth: resJsonData.dateOfBirth
        })
      },
      setToken,
      setSignedUserData
    )
    // eslint-disable-next-line
  }, [inEditMode, inImgMode])

  const deleteEducationItem = (educationId, institutionId) => {
    fetchData(
      `/user/deleteEducationItem/${userId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ educationId, institutionId })
      },
      () => {
        setEducationItems(educationItems.filter((educationItem) => educationItem._id !== educationId))
      },
      setToken,
      setSignedUserData
    )
  }

  const addEducationItem = (experienceItemData) => {
    fetchData(
      `/user/addEducationItem/${userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(experienceItemData)
      },
      (resJsonData) => {
        setUserData({ ...userData, ...resJsonData })
        setEducationItems([...educationItems, resJsonData.newItem])
      },
      setToken,
      setSignedUserData
    )
  }

  const deleteOccupationItem = (occupationId, companyId) => {
    fetchData(
      `/user/deleteOccupationItem/${userId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ occupationId, companyId })
      },
      () => {
        setOccupationItems(occupationItems.filter((occupationItem) => occupationItem._id !== occupationId))
      },
      setToken,
      setSignedUserData
    )
  }

  const addOccupationItem = (experienceItemData) => {
    fetchData(
      `/user/addOccupationItem/${userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(experienceItemData)
      },
      (resJsonData) => {
        setUserData({ ...userData, ...resJsonData })
        setOccupationItems([...occupationItems, resJsonData.newItem])
      },
      setToken,
      setSignedUserData
    )
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedData = {
      location: e.target.location.value,
      bio: e.target.bio.value,
      moshalStatus: e.target.moshalStatus.value,
      linkedIn: e.target.linkedIn.value,
      dateOfBirth: formatDate(e.target.dateOfBirth.value)
    }

    fetchData(
      `/user/${userId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      },
      (resJsonData) => {
        setInEditMode(false)
        setUserData({ ...userData, ...resJsonData })
      },
      setToken,
      setSignedUserData
    )
  }

  const handleProfileImgUpload = async (e) => {
    e.preventDefault()

    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 800
    }
    const compressedImage = await imageCompression(imgValue, options)
    const formData = new FormData()
    formData.append('userImage', compressedImage)

    fetchData(
      `/storage/profile/${userId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      },
      (resJsonData) => {
        const updatedSignedUser = {
          ...signedUserData,
          picturePath: resJsonData.picturePath
        }
        setSignedUserData(updatedSignedUser)
        setInImgMode(false)
      },
      setToken,
      setSignedUserData
    )
  }

  return (
    <>
      <userDataContext.Provider value={{ userData, setUserData }}>
        {userData && (
          <>
            <div className='picture-banner-container'>
              <img
                src={userData.bannerPath || '/assets/general/genericBanner.png'}
                alt={userData.firstName + "'s banner Picture"}
                className='banner-picture'
              />
              <img
                className='profile-picture'
                src={userData.picturePath || GENERIC_PICTURE_PATH}
                alt={userData.firstName + "'s Profile Picture"}
              />
              {signedUserData._id === userId && ( // Show picture edit pen when user id is matching
                <FontAwesomeIcon
                  className={'icon profile-page-img-edit'}
                  icon='fa-solid fa-pen'
                  onClick={() => {
                    setInImgMode((prevState) => !prevState)
                  }}
                />
              )}
            </div>

            <div className='profile-page'>
              <div className='profile-page-left-box'>
                {inImgMode && ( // When edit picture mode is on
                  <PictureEditForm
                    onInputChange={setImgValue}
                    onFormSubmit={handleProfileImgUpload}
                    buttonText='Pic-a-Boo!'
                  />
                )}
                <CategoryTitle title='work' />
                <ExperienceContainer
                  organizationsData={companiesData}
                  experienceItems={occupationItems}
                  setExperienceItems={setOccupationItems}
                  deleteExperienceItem={deleteOccupationItem}
                  addExperienceItem={addOccupationItem}
                  organizationType='Company'
                  field='position'
                />
                <CategoryTitle title='skills' />
              </div>
              <div className='profile-page-right-box'>
                <div className='profile-page-name-and-status'>
                  <div className='profile-page-name-and-edit'>
                    {userData.firstName} {userData.lastName}
                    {signedUserData._id === userId && (
                      <button
                        onClick={() => {
                          setInEditMode((prevState) => !prevState)
                        }}
                      >
                        {inEditMode ? 'Cancel' : 'Edit Profile'}
                      </button>
                    )}
                  </div>
                  <div className='profile-page-status'>{userData.moshalStatus || 'Status'}</div>
                </div>
                {/* TODO: user bio just sits in a p tag with no styling and control over it */}
                <p>{userData.bio || 'No bio available'}</p>
                <div className='user-data-container'>
                  <a href={userData.linkedIn} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='icon' icon='fa-brands fa-linkedin' />
                  </a>
                  <a href={`https://wa.me/+972${userData.phoneNumber.slice(1)}`} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='icon' icon='fa-brands fa-whatsapp' />
                  </a>
                  <a href={`mailto:${userData.email}`}>
                    <FontAwesomeIcon className='icon' icon='fa-solid fa-envelope' />
                  </a>
                  {!inEditMode && (
                    <div className='profile-page-data'>
                      <DataItem
                        faIconName='fa-solid fa-location-dot'
                        itemLabel='My city'
                        itemValue={userData.location}
                      />
                      <DataItem
                        faIconName='fa-solid fa-phone-volume'
                        itemLabel='Catch me at'
                        itemValue={userData.phoneNumber}
                      />
                      <DataItem
                        faIconName='fa-solid fa-briefcase'
                        itemLabel='Current workplace'
                        // itemValue={currentWorkplace}
                        itemValue=''
                      />
                      {userData.dateOfBirth && (
                        <DataItem
                          faIconName='fa-solid fa-cake-candles'
                          itemLabel='Birthday'
                          itemValue={new Date(userData.dateOfBirth).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          })}
                        />
                      )}
                    </div>
                  )}
                  {inEditMode && (
                    <form onSubmit={handleUpdate} className='user-data-form'>
                      <div className='form-element'>
                        <label htmlFor='location' className='form-element-label'>
                          Location:
                        </label>
                        <select
                          className='form-element-input'
                          type='text'
                          id='location'
                          name='location'
                          onChange={(e) => {
                            setDetailsFormData({
                              ...detailsFormData,
                              [e.target.name]: e.target.value
                            })
                          }}
                          value={detailsFormData.location}
                        >
                          {israelCities.city.map((c) => (
                            <option key={c.city_symbol} value={capitalizeFirstLetters(c.english_name)}>
                              {capitalizeFirstLetters(c.english_name)}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='form-element'>
                        <label htmlFor='linkedIn' className='form-element-label'>
                          Linkedin:
                        </label>
                        <input
                          className='form-element-input'
                          type='text'
                          id='linkedIn'
                          name='linkedIn'
                          onChange={(e) => {
                            setDetailsFormData({
                              ...detailsFormData,
                              [e.target.name]: e.target.value
                            })
                          }}
                          value={detailsFormData.linkedIn}
                        />
                      </div>
                      <div className='form-element'>
                        <label htmlFor='bio' className='form-element-label'>
                          Bio:
                        </label>
                        <textarea
                          className='form-element-input'
                          style={{ resize: 'none' }}
                          id='bio'
                          name='bio'
                          onChange={(e) => {
                            setDetailsFormData({
                              ...detailsFormData,
                              [e.target.name]: e.target.value
                            })
                          }}
                          value={detailsFormData.bio}
                        />
                      </div>
                      <div className='form-element'>
                        <label htmlFor='moshalStatus' className='form-element-label'>
                          Moshal Status:
                        </label>
                        <select
                          className='form-element-input'
                          id='moshalStatus'
                          name='moshalStatus'
                          defaultValue={userData.moshalStatus}
                        >
                          <option value='Scholar'>Scholar</option>
                          <option value='Alumni'>Alumni</option>
                          <option value='Staff'>Staff</option>
                        </select>
                      </div>
                      <div className='form-element'>
                        <label htmlFor='dateOfBirth' className='form-element-label'>
                          Birthday:
                        </label>
                        <input
                          className='form-element-input'
                          type='date'
                          id='dateOfBirth'
                          name='dateOfBirth'
                          onChange={(e) => {
                            setDetailsFormData({
                              ...detailsFormData,
                              [e.target.name]: e.target.value
                            })
                          }}
                          value={formatDate(detailsFormData.dateOfBirth)}
                        />
                      </div>

                      <button type='submit' className='user-data-form-submit-button'>
                        Submit
                      </button>
                    </form>
                  )}
                </div>

                <CategoryTitle title='studied' />
                <ExperienceContainer
                  organizationsData={institutionsData}
                  experienceItems={educationItems}
                  setExperienceItems={setEducationItems}
                  deleteExperienceItem={deleteEducationItem}
                  addExperienceItem={addEducationItem}
                  organizationType='Institution'
                  field='Degree'
                />
              </div>
            </div>
          </>
        )}
      </userDataContext.Provider>
    </>
  )
}

export default ProfilePage
