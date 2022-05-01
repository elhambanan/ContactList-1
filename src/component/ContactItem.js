import { Link } from "react-router-dom";
import userImg from "../images/images.png";

const ContactItem = ({ contact, deleteItem}) => {
    const {email, name, id} = contact
    return ( 
        <div className="contactItem">
           <div className="div1">
               <div className="img">
                    <img src={userImg}></img>
               </div>
                <Link  to={`user/${id}`} state ={ { contact : contact}} >
                    <div className="person">
                        <p>{email}</p>
                        <p>{name}</p>
                     </div>
                </Link>
                
           </div>
           <div className="div2">
               <Link to={`/edit/${id}`} 
                     state={{contact:contact}}
                     >
                    <button>Edit</button>
               </Link>
               <button onClick={() => deleteItem(id)}>Delete</button>
           </div>

        </div>
     );
}
 
export default ContactItem;