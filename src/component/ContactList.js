import ContactItem from "./ContactItem";

const ContactList = ({allContacts, editItem, deleteItem}) => {
   
    return ( 
        <div className="contactList">
            {allContacts
                ? allContacts.map((c) => 
                 <ContactItem 
                    key={c.id}
                    name={c.name}
                    email={c.email}
                    id= {c.id}
                    editItem={editItem}
                    deleteItem={deleteItem}
                />
                )
                : <p>loading ...</p>    
        }
        </div>
     );
}
 
export default ContactList;