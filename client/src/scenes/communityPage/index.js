import MoshalSocials from "./MoshalSocials/MoshalSocials";
import PhoneBook from "./PhoneBook.js/PhoneBook";
import WhatsappGroups from "./WhatsappGroups/WhatsappGroups";
import "./index.css";

const CommunityPage = () => {
  return (
    <div className="community-page">
      <WhatsappGroups  />
      <PhoneBook />
      <MoshalSocials />
    </div>
  );
};

export default CommunityPage;
