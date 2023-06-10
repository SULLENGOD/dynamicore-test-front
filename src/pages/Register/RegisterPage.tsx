import { RegisterForm } from "../../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <div className="register-container">
        <div className="d-flex align-items-center justify-content-end col-6 home-div2">
          <h1 className="m-3 form-title">Start your conatct list</h1>
        </div>
        <div className="col-6 home-div1">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};
