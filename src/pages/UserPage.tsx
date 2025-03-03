import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
 
interface UserParams{
    id:number;
    name:string;
}

export const usersLoader = async () => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return users
};

function UserPage() {
    const users = useLoaderData() as UserParams[]
  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>
                    {user.name}
                    </Link>

                </li>
            ))}
        </ul>

    </div>
  )
}

export default UserPage