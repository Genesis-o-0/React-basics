import ChangeProfile from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
export const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1> Username: {userName}</h1>
      <ChangeProfile />
    </div>
  );
};
