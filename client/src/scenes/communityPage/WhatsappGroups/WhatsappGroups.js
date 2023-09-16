import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsappGroups.css";

const mockGroups = [
  {
    name: "מושל העברית💛",
    link: "https://chat.whatsapp.com/abcdef123456",
    tags: ["צוות", "טכניון"],
  },
  {
    name: "פרוצאפ תוכנה+מדמח",
    link: "https://chat.whatsapp.com/ghijkl789012",
    tags: ["בוגרים", "משרות", "טכנולוגיה"],
  },
  {
    name: "מטיילים בירושלים",
    link: "https://chat.whatsapp.com/ijklmnop7890",
    tags: ["טיולים", "ירושלים"],
  },
  {
    name: "אמנות ותרבות",
    link: "https://chat.whatsapp.com/xyz1234567",
    tags: ["אמנות", "תרבות"],
  },
  {
    name: "חדשות ספורט",
    link: "https://chat.whatsapp.com/qrstuv5678",
    tags: ["ספורט", "חדשות"],
  },
  {
    name: "למידת עברית",
    link: "https://chat.whatsapp.com/wxyz7890123",
    tags: ["שפה", "למידה"],
  },
];

const WhatsappGroups = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
