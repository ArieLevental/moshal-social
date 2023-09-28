import { useContext, useState } from 'react'
import ExperienceBox from '../experienceBox/experienceBox.js'
import './experienceContainer.css'
import { globalAuthContext } from '../../../state/state.js'
import { userDataContext } from '../index.js'

const currentYear = new Date().getFullYear()

const ExperienceContainer = ({
  organizationsData,
  experienceItems,
  deleteExperienceItem,
  addExperienceItem,
  organizationType,
  field
}) => {
  const [inAddMode, setInAddMode] = useState(false)
  const [inRemoveMode, setInRemoveMode] = useState(false)
  const { signedUserData } = useContext(globalAuthContext)
  const { userData } = useContext(userDataContext)

  const handleExperienceAdd = (e) => {
    e.preventDefault()
    setInAddMode(false)
    addExperienceItem({
      organizationId: e.target.organizationId.value,
      startYear: e.target.startYear.value,
      endYear: e.target.endYear.value,
      [field.toLowerCase()]: e.target.field.value
    })
  }

  return (
    <div className='experience-container'>
      {signedUserData._id === userData._id && !inAddMode && (
        <div className='experience-container-buttons'>
          <button onClick={(e) => setInRemoveMode((prevState) => !prevState)}>Remove items</button>
          <button onClick={() => setInAddMode((prevState) => !prevState)}>Add new item</button>
        </div>
      )}

      {inAddMode && (
        <form className='experience-container-new-form' onSubmit={handleExperienceAdd}>
          <label htmlFor='organizationId'>{organizationType}:</label>
          <select id='organizationId' name='organizationId'>
            {organizationsData.map((organization) => (
              <option key={organization._id} value={organization._id}>
                {organization.name}
              </option>
            ))}
          </select>

          <label htmlFor='startYear'>Start year:</label>
          <input type='number' min='1990' max={currentYear + 1} defaultValue='1990' name='startYear' id='startYear' />

          <label htmlFor='endYear'>End year:</label>
          <input type='number' min='1990' max={currentYear + 10} defaultValue='2000' name='endYear' id='endYear' />

          <label htmlFor='field'>{field}:</label>
          <input type='text' name='field' id='field' />

          <div className='new-form-buttons-container'>
            <button type='submit'>Add</button>
            <button
              onClick={() => {
                setInAddMode((prevState) => !prevState)
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className='experience-section'>
        {experienceItems.map((experienceItem) => (
          <ExperienceBox
            key={experienceItem._id}
            experienceItem={experienceItem}
            inRemoveMode={inRemoveMode}
            deleteExperienceItem={deleteExperienceItem}
            organization={experienceItem.companyId || experienceItem.institutionId}
            field={field}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceContainer
