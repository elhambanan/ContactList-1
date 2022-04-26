import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import Header from './component/Header';

function App() {
  const [allContacts, setAllContacts] = useState([]);

 
  const addContactHandler = (contact) => {
    setAllContacts([...allContacts, {id:Math.ceil(Math.random()*100), ...contact}])
  }
  const deleteContactHandler = (id) => {
    console.log("delete", id);
    const filteredContact = allContacts.filter(c => c.id !== id);
    setAllContacts(filteredContact)
  }
  const editContactHandler = (id) => {
    console.log("edit",id)
  }

  // Local Storage:
  // CDM : get data
  // update : save data

  useEffect(()=> {
    const savedContacts = JSON.parse(localStorage.getItem("allContacts"));
    if(savedContacts) setAllContacts(savedContacts)
  }, [])

  useEffect(()=>{
    localStorage.setItem("allContacts", JSON.stringify(allContacts))
  }, [allContacts]);

  

  return (
    <div className="App">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList allContacts={allContacts} 
                   deleteItem={deleteContactHandler}
                   editItem={editContactHandler} />
    </div>
  );
}

export default App;
