
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, toggleAdmin } from "../features/users/usersSlice";

export default function UsersList() {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User Management</h2>
      {isLoading && <p>Đang tải...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {list.map((u) => (
        <div key={u.id} style={{ marginBottom: "8px" }}>
          <strong>{u.name}</strong> — Admin: {u.isAdmin ? "YES" : "NO"}
          <button onClick={() => dispatch(toggleAdmin(u.id))}>
            Toggle Admin
          </button>
        </div>
      ))}
    </div>
  );
}
