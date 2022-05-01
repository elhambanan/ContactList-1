import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";

const ContactList = ({allContacts, deleteItem}) => {
   
    return ( 
        <div className="contactList">
            <div>
                <Link to="/add">
                    <button>Add New contact</button>
                </Link>
            </div>
            {allContacts
                ? allContacts.map((c) => 
                 <ContactItem 
                    key={c.id}
                    contact = {c}
                    deleteItem={deleteItem}
                />
                )
                : <p>loading ...</p>    
        }
        </div>
     );
}
 
export default ContactList;