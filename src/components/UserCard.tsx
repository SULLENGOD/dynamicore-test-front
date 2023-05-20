import { useEffect, useState } from "react";
import { getprofile } from "../api/api";
import { User } from "../pages/User/User";

export const UserCard = () => {
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
    <div className="card m-auto mt-3 text-center p-3" style={{ width: "18rem" }}>
      <img
        src="https://gvzoo.com/cms-data/gallery/blog/animals/capybara/banner-capybara-sq.jpg"
        className="card-img-top rounded-circle "
      />
      <div className="card-body">
        {user && <h1 className="card-title">{user.username}</h1>}
      </div>
    </div>
  );
};
