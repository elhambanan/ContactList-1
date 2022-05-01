import { Link, useLocation } from "react-router-dom";

const ContactDetail = ({}) => {
    const { state } = useLocation();
    const {contact} = state;

    return ( 
        <div>
            <h3>Contact Detail Page</h3>
            <p>neme : {contact.name}</p>
            <p>email :{contact.email}</p>
            <Link to="/" >
                go back HomePage...
            </Link>
        </div>
     );
}
 
export default ContactDetail;