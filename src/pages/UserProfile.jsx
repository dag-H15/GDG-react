import { useParams } from "react-router-dom";
const UserProfile = () => {
  const { username } = useParams();
  return <h2 className="page">User Profile: {username}</h2>;
};
export default UserProfile;