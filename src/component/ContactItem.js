import userImg from "../images/images.png"
const ContactItem = ({email, name, id, editItem, deleteItem}) => {
    return ( 
        <div className="contactItem">
           <div className="div1">
               <div className="img">
                    <img src={userImg}></img>
               </div>
               <div className="person">
                    <p>{email}</p>
                    <p>{name}</p>
               </div>
                
           </div>
           <div className="div2">
               <button onClick={() => editItem(id)}>Edit</button>
               <button onClick={() => deleteItem(id)}>Delete</button>
           </div>

        </div>
     );
}
 
export default ContactItem;