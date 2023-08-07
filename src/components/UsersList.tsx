import React, { useEffect } from "react";

interface IUsersListPros{
    data: string[];
    viewType: 'table' | 'grid'
}
 const UsersList = (props:IUsersListPros)=>{
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
},[])
    return(
        <div>
            Test
        </div>
    )
}
export default UsersList;