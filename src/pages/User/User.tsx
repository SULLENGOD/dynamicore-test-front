
import { ContactsCards } from "../../components/ContactsCards";
import { UserCard } from "../../components/UserCard";


export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  contactsId: { 
      username: string,
      email: string
   }[];
}

export const UserPage = () => {

  return (
    <div>
      <UserCard />
      <ContactsCards  />
    </div>
  )
}
