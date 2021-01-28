import { useState } from "react";

const UserInfo = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <h1>
      UserStatus: {(userLoggedIn && "User is logged in") || "Not Logged In"}
    </h1>
  );
};

export default UserInfo;
