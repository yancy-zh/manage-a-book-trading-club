import React from "react";
import "../styles/Users.css";
import axios from "axios";
import UserCard from "../components/UserCard";
function Users() {
  const [usersData, setUsersData] = React.useState([]);
  const getUsers = () => {
    const getUsersUrl = "https://jsonplaceholder.typicode.com/users";
    var wikiConfig = {
      timeout: 6500,
    };

    async function getJsonResp(url, config) {
      const res = await axios.get(url, config);
      // const users = res.data.map((e) => e.name);
      return res.data;
    }
    return getJsonResp(getUsersUrl, wikiConfig)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log("an error occurred: " + error);
        return null;
      });
  };

  React.useEffect(() => {
    getUsers().then((result) => {
      setUsersData(result);
    });
  }, []);

  return (
    <div className="ls-box">
      <div className="ls_title">
        <h3>Users</h3>
      </div>
      <div className="ls_body">
        <ul>
          {usersData.map((user) => (
            <UserCard key={user.id} item={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
