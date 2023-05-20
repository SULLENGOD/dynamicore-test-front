import { useEffect, useState } from "react";
import { getprofile } from "../api/api";
import { User } from "../pages/User/User";
import { Card } from "./Card";


export const ContactsCards = () => {
    const token = localStorage.getItem("token") ?? "";

  const [user, setUser] = useState<User>({});

  const {contactsId} = user;

  const getUserInfo = async () => {
    const res = await getprofile(token);
    setUser(res);
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="text-center mt-5">
      <h1>
        Contacts
      </h1>
      {
        contactsId?.map((contact) => {
            return <Card contact={contact} />
            
        })
      }
    </div>
  );
};
