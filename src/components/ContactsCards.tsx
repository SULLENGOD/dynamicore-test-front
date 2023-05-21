import { useCallback, useEffect, useState } from "react";
import { getprofile } from "../api/api";
import { User } from "../pages/User/User";
import { Card } from "./Card";


export const ContactsCards = () => {
    const token = localStorage.getItem("token") ?? "";

  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    email: "",
    password: "",
    contactsId: []
  });

  const {contactsId} = user;

  const getUserInfo = useCallback(async () => {
    const res = await getprofile(token);
    setUser(res);
  },[token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  

  return (
    <div className="text-center mt-5">
      <h1  style={{color: "white"}}>
        Contacts
      </h1>
      <hr />
      <div className="d-flex flex-wrap">
      {
        contactsId?.map((contact) => {
            return <Card key={contact.username} contact={contact} userId={user._id} />
            
        })
      }
      </div>
    </div>
  );
};
