import React from 'react'

const UaerTable = (props) => (
 <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>username</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {props.users.length>0?(
            props.users.map((user)=>(
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                    <button onClick={()=>{props.editrow(user)}} className="button muted-button">Edit</button>
                    <button onClick={()=>{props.deletuser(user.id)}} className="button muted-button">Delete</button>
                </td>
            </tr>
            ))
        ):(
            <tr>
                <td colSpan={3}>no usres</td>
            </tr>
        )
        }

    </tbody>
 </table>
)

export default UaerTable;