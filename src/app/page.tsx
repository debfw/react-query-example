"use client";
import React, { useState } from "react";
import { useGetMockUserPrefQuery, useUpdateMockUserMutation } from "./hooks";

export default function Home() {
  const [searchUser, setSearchUser] = useState<string | null>(null);
  const { data } = useGetMockUserPrefQuery();
  const { mutate: updateData } = useUpdateMockUserMutation();

  const handleModal = () => {};
  return (
    <div>
      <h1>Manage User Preferences</h1>
      {Object.values(data).map((user) => (
        <div key={user.id}>
          <h2>{user.id}</h2>
          <p>Username: {user.username}</p>
          <p>Preference: {user.preference}</p>
          <button onClick={handleModal}>Toggle Preference</button>
        </div>
      ))}
      {searchUser === "sister"}
    </div>
  );
}
