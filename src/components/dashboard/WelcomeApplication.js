import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../manager/Home";
import User from "../Admin/User";
import AllManagers from "../Admin/AllManagers";

const WelcomeApplication = () => {
    const [userDetails, setUserDetails] = useState([]);

    // Code to get the authorize user token from local storage
  console.log(localStorage.getItem("user-token"));
  const token = localStorage.getItem("user-token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };


  // Code to get User Data from API call
  useEffect(() => {
    async function getUserData() {
      try {
        const userData = await axios.get(
          "http://127.0.0.1:8000/api/user/profile/",
          config
        );
        console.log("Get User Data", userData.data);
        setUserDetails(userData.data);
      } catch (error) {
        console.log("Data fetching Error Occured in User Data");
      }
    }

    getUserData();
  }, []);

  console.log("User Details:-", userDetails);
  console.log("User Details user type:-", userDetails.user_type);

  return (
    <div>
        {
           userDetails.user_type === "Project Manager" &&
           <Home/>
        }

        {
           userDetails.user_type === "Admin" &&
           <User/>
        }

        {
           userDetails.user_type === "Management" &&
           <AllManagers/>
        }
    </div>
  )
}

export default WelcomeApplication