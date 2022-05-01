import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AddContact from './component/AddContact';
import ContactDetail from './component/ContactDetail';
import ContactList from './component/ContactList';
import EditContact from './component/EditContact';
import Header from './component/Header';
import { addNewContact } from './Services/addContactService';
import deleteOneContact from './Services/deleteContactService';
import getAllContacts from './Services/getAllContactsService';
import addOneContact from './Services/addOneContactService';
import updateContact from './Services/updateContactService';
function App() {
  const [allContacts, setAllContacts] = useState([]);
  const navigate = useNavigate();

 
  const addContactHandler = async(contact) => {
    try {
      const { data } = await addNewContact(contact);
      setAllContacts([...allContacts, data])
    } catch (error) {
      
    }
  };

  const editContactHandler =  async (contact, id) => {
    // put : id => DB update
    console.log(contact, id)
    const {data} = await updateContact(contact, id)
    console.log(data)
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContact = allContacts.filter(c => c.id !== id);
      setAllContacts(filteredContact)
    } catch (error) {
      
    }
  }


 

  // Local Storage:
  // CDM : get data
  // update : save data

  useEffect(()=> {
    // const savedContacts = JSON.parse(localStorage.getItem("allContacts"));
    // if(savedContacts) setAllContacts(savedContacts)
    
    // axios.get("https://jsonplaceholder.typicode.com/users")
    //      .then((res) =>setAllContacts(res.data)) 
    //      .catch((err) => console.log(err))

    const getContacts = async () => {
      const { data } = await getAllContacts();
      setAllContacts(data)
    };
    try {
      getContacts();
    } catch (error) {}
  }, [])

  // useEffect(()=>{
  //   localStorage.setItem("allContacts", JSON.stringify(allContacts))
  // }, [allContacts]);

  

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/edit/:id" element={<EditContact editContactHandler={editContactHandler}/>} />
        <Route path='/'    element={<ContactList allContacts={allContacts} 
                                                 deleteItem={deleteContactHandler}
                                                 />} /> 
        <Route path="/user/:id" element={<ContactDetail />} />

                                         
      </Routes>

      {/* <Routes> 
          {routes.map((route, index) =>  (
            <Route {...route} key={index}/>
          ))}
      </Routes> */}


      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList allContacts={allContacts} 
                   deleteItem={deleteContactHandler}
                   editItem={editContactHandler} /> */}
    </main>
  );
}

export default App;
