import type { Metadata } from "next";
import React from 'react';
import { getAllUsers } from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};


export default async function UsersPage () {
    const users: Promise<User[]> = getAllUsers();
    const userData = await users;
  
    const  content = (

        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
     <br />
     {userData.map((user: User)=>{
        return (
     <div key = {user.id}>
     <p key = {user.id}>
< Link href = {`/dashboard/users/${user.id}`}>{user.name}</Link>

     </p>
     
     </div>
     )
     })}
        </section>
    )
    return content;
}
