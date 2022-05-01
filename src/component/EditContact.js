import {   useEffect, useState } from "react";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import getOneContact from "../Services/getOneContactService";


const EditContact = ({editContactHandler}) => {
    const [contact, setContact] = useState({name:'', email:""});

    // const {state} = useLocation();
    // const {contact} = state

    const { id } = useParams(); 
    
    const navigate = useNavigate(); 

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        if(!contact.name || !contact.email){
            alert("all fields are mandatory !")
            return
        }
        e.preventDefault();
        editContactHandler(contact, id);
        setContact({name:"", email:""});
        navigate("/")

    }

    useEffect(() => {
        const localFetch = async () => {
            try {
                const { data } = await getOneContact(id);
                setContact({name: data.name, email: data.email})
              } catch (error) {
                  console.log(id, "error")
              };
            };
            localFetch();    }, []);

    return (  
        <form onSubmit={submitHandler} className="addContact">
            <div className="controlForm">
                <label>Name</label>
                <input type="text" 
                       name="name" 
                       onChange={changeHandler} 
                       value={contact.name}/>
            </div>
            <div className="controlForm">
                <label>Email</label>
                <input type="text"
                       name="email" 
                       onChange={changeHandler} 
                       value={contact.email}/>
            </div>
            <button type="submit">Edit Contact</button>
        </form>
    );
}
 
export default EditContact;