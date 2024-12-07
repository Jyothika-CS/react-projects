import { useState } from "react";

// const users =[
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'Angles', age: 45 },
// ];

export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'Angles', age: 45 },
    ])

    console.log(users);
    // Derived State: count of users
    const userCount = users.length; // Derived state
    // Derived State: average age of users
    const averagAge = users.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;

    return (
      <div className="main-div">
        <h1> Users List </h1>
        <ul>
          {users.map((currElem, index) => {
            return (
              <li key={index}>
                {currElem.name} - {currElem.age} years old
              </li>
            );
          })}
        </ul>
        <p>Total Users: {userCount}</p>
        <p>Average: {averagAge}</p>
      </div>
    );
}