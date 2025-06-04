import userService from "../services/userService";
import useUser from "../hooks/userUsers";

const ListUsers = () => {
  const { users, error, isLoading, setUsers, setError} = useUser()

  const deleteUser = (id: number) => {
    const originalUsers = users;
    setUsers(users.filter((user) => user.id !== id));
    userService.delete(id).catch((err) => {
      setUsers(originalUsers);
      setError(err.message);
    });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "Kuldeep" };
    userService
      .create(newUser)
      .then((res) => {
        console.log(res.data);
        setUsers([...users, res.data]);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const updateUser = (id: number) => {
    const newUserInfo = { id: id, name: "Kuldeep Khatri" };
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...newUserInfo } : user))
    );
    userService
      .update(newUserInfo)
      .then((res) => console.log(res.data))
      .catch((err) => setError(err.mesage));
  };

  if (isLoading) return <div className="spinner-border"></div>;

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
