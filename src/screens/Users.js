import React from "react";
import "./Users.css";
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

  const users = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
  ];
  return (
    <div className="ls-box">
      <div className="ls_title1">Users</div>
      <div className="ls_bd">
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
