import { useState, useEffect, useContext } from 'react'
import useLocalStorageState from '../../../hooks/useLocalStorageState.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { globalAuthContext } from '../../../state/state.js'
import fetchData from '../../../utils/fetchData.js'
import './WhatsappGroups.css'

const WhatsappGroups = () => {
  const { token, setToken, signedUserData, setSignedUserData } = useContext(globalAuthContext)
  const [searchQuery, setSearchQuery] = useState('')
  const [groups, setGroups] = useLocalStorageState('whatsapp_groups', [])
  const [addGroupMode, setAddGroupMode] = useState(false)
  const [editGroupModeSettings, setEditGroupModeSettings] = useState({
    is_active: false,
    edited_group_id: null
  })
  const [groupEditFormData, setGroupEditFormData] = useState(null)

  useEffect(() => {
    fetchData(
      '/whatsapp',
      { headers: { Authorization: `Bearer ${token}` } },
      (resJsonData) => {
        setGroups(resJsonData)
      },
      setToken,
      setSignedUserData
    )
  }, [])

  const filteredGroups = groups.filter((group) => {
    const query = searchQuery.toLowerCase()
    return group.tags.some((tag) => tag.toLowerCase().includes(query)) || group.name.toLowerCase().includes(query)
  })

  const handleNewGroup = async (e) => {
    e.preventDefault()
    const newGroup = {
      name: e.target.groupName.value,
      link: e.target.groupLink.value,
      tags: [...new Set(e.target.groupTags.value.split(',').map((tag) => tag.trim()))],
      userId: signedUserData._id
    }
    fetchData(
      '/whatsapp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newGroup)
      },
      (resJsonData) => {
        setGroups([resJsonData, ...groups])
        setAddGroupMode(false)
      },
      setToken,
      setSignedUserData
    )
  }

  const handleUpdateGroup = async (e) => {
    e.preventDefault()
    const updatedGroup = {
      name: e.target.name.value,
      link: e.target.link.value,
      // move tags handle logic to backend
      tags: [...new Set(e.target.tags.value.split(',').map((tag) => tag.trim()))]
    }
    fetchData(
      `/whatsapp/${editGroupModeSettings.edited_group_id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedGroup)
      },
      (resJsonData) => {
        setGroups(
          groups.map((group) => {
            if (group._id === editGroupModeSettings.edited_group_id) {
              return { ...group, ...updatedGroup }
            } else {
              return group
            }
          })
        )
        setEditGroupModeSettings({
          ...editGroupModeSettings,
          is_active: false
        })
      },
      setToken,
      setSignedUserData
    )
  }

  const handleDeleteGroup = async (id) => {
    fetchData(
      `/whatsapp/${id}`,
      {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      },
      (resJsonData) => {
        setGroups(groups.filter((group) => group._id !== id))
        setEditGroupModeSettings({
          ...editGroupModeSettings,
          is_active: false
        })
      },
      setToken,
      setSignedUserData
    )
  }

  const updateEditFormDataOnChange = (e) => {
    setGroupEditFormData({
      ...groupEditFormData,
      [e.target.name]: e.target.value || ''
    })
  }

  return (
    <div className='whatsapp-groups community-page-column'>
      <h1>WhatsApp Groups</h1>
      <input
        type='text'
        placeholder='Search for a group...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className='add-group-section'>
        <button className='add-group-button' onClick={(e) => setAddGroupMode((prevState) => !prevState)}>
          {addGroupMode ? 'Cancel' : 'Add a group'}
        </button>
        {addGroupMode && (
          <form className='add-group-form' onSubmit={handleNewGroup}>
            <input type='text' placeholder='Group name' name='groupName' required />
            <input type='text' placeholder='Group link' name='groupLink' required />
            <input type='text' placeholder='Group tags, split with commas' name='groupTags' required />
            <button type='submit'>Add</button>
          </form>
        )}
      </div>

      <div className='group-list'>
        {filteredGroups.map((group) => (
          <div key={group._id} className='group-item'>
            <div className='group-item-header'>
              {(!editGroupModeSettings.is_active || editGroupModeSettings.edited_group_id !== group._id) && (
                <div className='group-name'>{group.name}</div>
              )}
              {group.userId === signedUserData._id && !editGroupModeSettings.is_active && (
                <button
                  className='group-edit-button'
                  onClick={() => {
                    console.log(groupEditFormData)
                    setEditGroupModeSettings({
                      is_active: !editGroupModeSettings.is_active,
                      edited_group_id: group._id
                    })
                    setGroupEditFormData({
                      name: group.name,
                      link: group.link,
                      tags: group.tags,
                      userId: signedUserData._id
                    })
                  }}
                >
                  <FontAwesomeIcon icon='fa-solid fa-pen' />
                </button>
              )}
              {group.userId === signedUserData._id &&
                editGroupModeSettings.is_active &&
                editGroupModeSettings.edited_group_id === group._id && (
                  <div className='group-edit-container'>
                    <div className='group-edit-buttons'>
                      <button className='group-delete-button' onClick={() => handleDeleteGroup(group._id)}>
                        <FontAwesomeIcon icon='fa-solid fa-trash' />
                      </button>
                      <button
                        className='group-cancel-edit-button'
                        onClick={() =>
                          setEditGroupModeSettings({
                            ...editGroupModeSettings,
                            is_active: !editGroupModeSettings.is_active
                          })
                        }
                      >
                        <FontAwesomeIcon icon='fa-solid fa-ban' />
                      </button>
                    </div>
                    <div>
                      <form
                        /* this is the group edit form */
                        className='add-group-form'
                        onSubmit={handleUpdateGroup}
                      >
                        <input
                          type='text'
                          placeholder='Group name'
                          name='name'
                          value={groupEditFormData.name}
                          onChange={updateEditFormDataOnChange}
                          required
                        />
                        <input
                          type='text'
                          placeholder='Group link'
                          name='link'
                          value={groupEditFormData.link}
                          onChange={updateEditFormDataOnChange}
                          required
                        />
                        <input
                          type='text'
                          placeholder='Group tags, split with commas'
                          name='tags'
                          value={groupEditFormData.tags}
                          onChange={updateEditFormDataOnChange}
                          required
                        />
                        <button type='submit'>
                          <FontAwesomeIcon icon='fa-solid fa-check' />
                        </button>
                      </form>
                    </div>
                  </div>
                )}
            </div>
            {(!editGroupModeSettings.is_active || editGroupModeSettings.edited_group_id !== group._id) && (
              <>
                <a href={group.link} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon='fa-brands fa-whatsapp' color='#25d366' size='2x' />
                  Join Group
                </a>
                <div className='group-tags'>
                  Tags:
                  {group.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className='tag'>
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatsappGroups
