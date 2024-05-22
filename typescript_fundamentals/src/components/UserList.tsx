import React from "react";

type User = {
    name: string;
    age: number;
};

const UserList: React.FC = () => {
    const user: User[] = [
        {
            name: "Mahrus",
            age: 27,
        },
        {
            name: "James",
            age: 29,
        },
    ];

    return (
        <div>
            {user.map((person) => (
                <div>
                    <p>{person.name}</p>
                    <p>{person.age}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;
