import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faCancel,
  faCheck,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { globalAuthContext } from "../../../state/state.js";
import "./WhatsappGroups.css";

const WhatsappGroups = () => {
  const { token, signedUserData } = useContext(globalAuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  // TODO: reverse the order of the groups so that the newest groups are at the top. OR actually alphabetically
  const [groups, setGroups] = useState([]);
  const [addGroupMode, setAddGroupMode] = useState(false);
  const [editGroupModeSettings, setEditGroupModeSettings] = useState({
    is_active: false,
    edited_group_id: null,
  });

  useEffect(() => {
    const getGroups = async () => {
      try {
        const response = await fetch("http://localhost:3001/whatsapp", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data = await response.json();
          setGroups(data);
          // console.log("Groups fetched:", data);
        } else {
          console.error("Failed to fetch groups");
        }
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };
    getGroups();
  }, [token]);

  const filteredGroups = groups.filter((group) => {
    const query = searchQuery.toLowerCase();
    return (
      group.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      group.name.toLowerCase().includes(query)
    );
  });

  const handleNewGroup = async (e) => {
    e.preventDefault();
    const newGroup = {
      name: e.target.groupName.value,
      link: e.target.groupLink.value,
      tags: e.target.groupTags.value.split(","),
      userId: signedUserData._id,
    };
    try {
      const response = await fetch("http://localhost:3001/whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newGroup),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("New group added:", data);
        console.log(data.userId, signedUserData._id);
        setGroups([...groups, data]); // TODO: Maybe update useEffect to fetch groups again?
        setAddGroupMode(false);
      } else {
        console.error("Failed to add a new group");
      }
    } catch (err) {
      console.error("Error adding new group:", err);
    }
  };

  const handleDeleteGroup = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/whatsapp/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("Group deleted successfully");
        setGroups(groups.filter((group) => group._id !== id));
        setEditGroupModeSettings({
          ...editGroupModeSettings,
          is_active: false,
        });
      } else {
        console.error("Failed to delete group");
      }
    } catch (err) {
      console.error("Error deleting group:", err);
    }
  };

  // TODO: TEMP!
  const handleEditGroup = async (id) => {
    const updatedGroup = {
      name: document.getElementsByName("groupName")[0].value,
      link: document.getElementsByName("groupLink")[0].value,
      tags: document.getElementsByName("groupTags")[0].value.split(","),
    };
    try {
      const response = await fetch(`http://localhost:3001/whatsapp/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedGroup),
      });
      if (response.ok) {
        console.log("Group updated successfully");
        setGroups(
          groups.map((group) => (group._id === id ? updatedGroup : group))
        );
        setEditGroupModeSettings({
          ...editGroupModeSettings,
          is_active: false,
        });
      } else {
        console.error("Failed to update group");
      }
    } catch (err) {
      console.error("Error updating group:", err);
    }
  };

  return (
    // TODO: styling issue - height
    <div className="whatsapp-groups community-page-column">
      <h1>WhatsApp Groups</h1>
      <input
        type="text"
        placeholder="Search for a group..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="add-group-section">
        <button
          className="add-group-button"
          onClick={() => setAddGroupMode(!addGroupMode)}
        >
          {addGroupMode ? "Cancel" : "Add a group"}
        </button>
        {addGroupMode && (
          <form className="add-group-form" onSubmit={handleNewGroup}>
            <input
              type="text"
              placeholder="Group name"
              name="groupName"
              required
            />
            <input
              type="text"
              placeholder="Group link"
              name="groupLink"
              required
            />
            <input
              type="text"
              placeholder="Group tags, split with commas"
              name="groupTags"
              required
            />
            <button type="submit">Add</button>
          </form>
        )}
      </div>

      <div className="group-list">
        {filteredGroups.map((group) => (
          <div key={group._id} className="group-item">
            <div className="group-item-header">
              <div className="group-name">{group.name}</div>
              {group.userId === signedUserData._id &&
                !editGroupModeSettings.is_active && (
                  <button
                    className="group-edit-button"
                    onClick={() =>
                      setEditGroupModeSettings({
                        is_active: !editGroupModeSettings.is_active,
                        edited_group_id: group._id,
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                )}
              {group.userId === signedUserData._id &&
                editGroupModeSettings.is_active &&
                editGroupModeSettings.edited_group_id === group._id && (
                  <div className="group-edit-buttons">
                    <button
                      className="group-delete-button"
                      onClick={() => handleDeleteGroup(group._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      className="group-confirm-edit-button"
                      onClick={() => handleEditGroup(group._id)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button
                      className="group-cancel-edit-button"
                      onClick={() =>
                        setEditGroupModeSettings({
                          ...editGroupModeSettings,
                          is_active: !editGroupModeSettings.is_active,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faCancel} />
                    </button>
                  </div>
                )}
            </div>
            <a href={group.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} color="#25d366" size="2x" />{" "}
              Join Group
            </a>
            <div className="group-tags">
              Tags:{" "}
              {group.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsappGroups;
