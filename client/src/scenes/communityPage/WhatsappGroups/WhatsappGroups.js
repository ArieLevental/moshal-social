import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { globalAuthContext } from "../../../state/state.js";
import "./WhatsappGroups.css";

const WhatsappGroups = () => {
  const { token } = useContext(globalAuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [mockGroups, setMockGroups] = useState([]);

  useEffect(() => {
    const getGroups = async () => {
      const response = await fetch(`http://localhost:3001/whatsapp`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setMockGroups(data);
    };
    console.log(mockGroups);
    getGroups();
  }, []);

  const filteredGroups = mockGroups.filter((group) =>
    group.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="whatsapp-groups community-page-column">
      <h1>WhatsApp Groups</h1>
      <input
        type="text"
        placeholder="Search for a group..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="group-list">
        {filteredGroups.map((group, index) => (
          <div key={index} className="group-item">
            <div className="group-name">{group.name}</div>

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
