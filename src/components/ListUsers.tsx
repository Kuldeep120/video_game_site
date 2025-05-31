import axios from "axios";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
const ListUsers = () => {
    const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data)
    })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <>
      <ul className="list-group">
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
        <li></li>
      </ul>
    </>
  );
};

export default ListUsers;
