import { useState } from "react";
import UaerTable from "./tables/UaerTable";
import AdduserForm from "./forms/AdduserForm";
import EditUserForm from "./forms/Edituserform";


function App() {

const usersdata=[
  {id:1,name:'jose',username:'sjose'},
  {id:2,name:'jejin',username:'sjejin'},
  {id:3,name:'ajay',username:'sajay'},
];

const adduser=(user)=>{
  user.id=users.length+1;
  setUsers([...users,user])

}
const deletuser=(id)=>{
  setUsers(users.filter((user)=>user.id!==id))
  setEditing(false);
}


const [users,setUsers]=useState(usersdata)

const[editting,setEditing]=useState(false)

const initialformstate={id:null,name:'',username:''}
const[currentUser,setCurrentuser]=useState(initialformstate)

const editrow=(user)=>{
  setEditing(true);
  setCurrentuser({id:user.id,name:user.name,username:user.username})
}

const updateUser=(id,updatedUser)=>{
  setEditing(false);
  setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
}


  return (
    < div className="container">
      <h1>CRUD APP</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editting?(<div>
            <h2>Edit user</h2>
            <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />
            </div>):(<div>
              <h2>Add user</h2>
          <AdduserForm adduser={adduser}/>
          </div>)

            }
          
        </div>
        <div className="flex-large">
          <h2>view users</h2>
          <UaerTable editrow={editrow} deletuser={deletuser} users={users} />
          
        </div>
      </div>
    </div>

  );
 
  
}

export default App;
