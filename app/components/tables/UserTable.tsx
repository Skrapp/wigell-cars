"use client"
import { useState } from "react";
import { User } from "@/lib/types";
import Table from "./Table";
import Button from "../Button";
import { deleteUser } from "@/lib/api";

type UserListProps = {
    initialUsers: User[];
    credentials: string;
}

export default function UserTable({
    initialUsers,
    credentials,
}: UserListProps) {
    const [users, setUsers] = useState(initialUsers);

    async function handleUserDeletion(userId:number) {
        if(confirm(`Radera användare med id: ${userId}?`)){
                    console.log(`Raderar bokning med id: ${userId}`);
                    const response = await deleteUser(userId, credentials);
                    if(!response){
                        alert(`Bokning kunde ej raderas: ${userId}`);
                    }else{
                        setUsers(users.filter(
                                user => user.id !== userId
                        ));
                    }
                }else{
                    console.log("Ej raderad")
                }
    }

    return (
        <div className="flex flex-col w-full overflow-auto bg-white shadow-md rounded-lg p-4">
            {users.length === 0 ? (
                <p className="text-center">Inga användare hittade</p>
            ) : (
                <Table
                    headers={[
                        "ID",
                        "Namn",
                        "Användarnamn",
                        "Telefon",
                        "E-post",
                        "Roll",
                        "Order",
                        "Redigera",
                        "Radera"
                    ]}
                >
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="p-4">{user.id}</td>
                            <td className="p-4">{user.firstName} {user.lastName}</td>
                            <td className="p-4">{user.username}</td>
                            <td className="p-4">{user.phone}</td>
                            <td className="p-4">{user.email}</td>
                            <td className="p-4">{user.role}</td>
                            <td className="p-4">{user.noOfOrders}</td>
                            <td className="p-4">
                                <Button href={`/admin/users/${user.id}`}>Redigera</Button>
                            </td>
                            <td className="p-4">
                                <Button onClick={() => handleUserDeletion(user.id)}>Radera</Button>
                            </td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
}
