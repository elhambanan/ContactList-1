import AddContact from "./component/AddContact";
import ContactDetail from "./component/ContactDetail";
import ContactItem from "./component/ContactItem";
import ContactList from "./component/ContactList";


const routes = [
    {path: "/add", element:<AddContact/>},
    {path: "/", element:<ContactList />},
    {path: "/:id", element:<ContactItem/>},
    {path: "/:id/detail", element:<ContactDetail/>},

]
export default routes;