import { useEffect, useState } from "react";
import { ContactsCards } from "../../components/ContactsCards";
import { UserCard } from "../../components/UserCard";
import { getprofile } from "../../api/api";

export interface User {
  username: string;
  email: string;
  password: string;
  contactsId: { 
      username: string,
      email: string
   }[];
}

export const UserPage = () => {
  const token = localStorage.getItem("token") ?? "";

  const [user, setUser] = useState<User>({});

  const getUserInfo = async () => {
    const res = await getprofile(token);
    setUser(res);
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div>
      <UserCard  user={user}/>
      <ContactsCards user={user} />
    </div>
  )
}
