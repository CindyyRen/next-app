import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  let sortUsers;
  // const sortedByName = sort(users).asc((u) => u.name);
  // const sortedByEmail = sort(users).asc((u) => u.email);
  // sortOrder === 'email'
  //   ? (sortUsers = sortedByEmail)
  //   : (sortUsers = sortedByName);
  sortUsers = sort(users).asc(
    sortOrder === 'email' ? (u) => u.email : (u) => u.name
  );
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortUsers.map((user) => (
            <tr key={user.id} className="hover">
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
