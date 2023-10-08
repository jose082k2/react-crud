import React, { useState } from 'react'

const AdduserForm = (props) => {
    const initialformstate={id:null,name:'',username:''}
    const[user,setUser]=useState(initialformstate);

 const handleinputchange=(event)=>{
    const {name,value}=event.target
    setUser({...user,[name]:value})
 }

  return (
   <form onSubmit={
    event=>{
        if(!user.name||!user.username)return;
        event.preventDefault();
        props.adduser(user);
        setUser(initialformstate)
    }
   }>
    <label>Name</label>
    <input type="text" onChange={handleinputchange} name="name" value={user.name} />
    <label>username</label>
    <input type="text" onChange={handleinputchange} name="username" value={user.username}/>
    <button>Add new user</button>
   </form>
  )
}

export default AdduserForm