import { useState } from "react";

const AddContact = ({addContactHandler}) => {
    const [contact, setContact] = useState({
        name:"",
        email:""
    })

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
    }
    const submitHandler = (e) => {
        if(!contact.name || !contact.email){
            alert("all fields are mandatory !")
            return
        }
        e.preventDefault();
        addContactHandler(contact);
        setContact({name:"", email:""})
    }
    return (  
        <form onSubmit={submitHandler} className="addContact">
            <div className="controlForm">
                <label>Name</label>
                <input type="text" name="name" onChange={changeHandler}/>
            </div>
            <div className="controlForm">
                <label>Email</label>
                <input type="text" name="email" onChange={changeHandler}/>
            </div>
            <button type="submit">Add Contact</button>
        </form>
    );
}
 
export default AddContact;