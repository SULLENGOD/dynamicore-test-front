import { LoginForm } from "../../components/LoginForm";

export const Home = () => {
  return (
    <>
     
        <div className="home-container">
          <div className="col-6 home-div1">
            <LoginForm />
          </div>
          <div className="d-flex align-items-center col-6 home-div2">
            <h1 className="ms-5 form-title">Contact App</h1>
          </div>
        </div>

    </>
  );
};
