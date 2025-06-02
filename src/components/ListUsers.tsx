import axiosClient, {CanceledError} from "../services/apiClient";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
const ListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axiosClient
      .get("users", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  const deleteUser = (id: number) => {
    const originalUsers = users;
    setUsers(users.filter((user) => user.id !== id));
    axiosClient
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .catch((err) => {
        setUsers(originalUsers);
        setError(err.message);
      });
  };
  const addUser = () => {
    const newUser = { name: "Kuldeep" };
    axiosClient
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then((res) => {
        console.log(res.data);
        setUsers([...users, res.data]);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const updateUser = (id: number) => {
    const newUserInfo = { name: "Kuldeep Khatri" };
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...newUserInfo } : user))
    );
    axiosClient
      .patch("https://jsonplaceholder.typicode.com/users/" + id, newUserInfo)
      .then((res) => console.log(res.data))
      .catch((err) => setError(err.mesage));
  };

  return (
    <>
      {error && <p className="text text-danger">{error}</p>}

      <button className="btn btn-outline-primary" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group ">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <div>
              <button
                className="btn btn-outline-danger mx-3"
                onClick={() => updateUser(user.id)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        <li></li>
      </ul>
    </>
  );
};

export default ListUsers;
