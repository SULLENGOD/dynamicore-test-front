import { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { signUp } from "../api/api";
import { useNavigate } from "react-router-dom";

type FormElement = FormEvent<HTMLFormElement>

export const RegisterForm = () => {
  const navigate = useNavigate();

  const { formState, onChange} = useForm();
  const { username, email, password, checkPass } = formState;

  const [ error, setError ] = useState("");

  const onSubmitinfo = async(event: FormElement) => {
    event.preventDefault();
    if(password !== checkPass) {
      setError("Password don't match");
    } else {
      if(username && email && password !== "") {
        const res = await signUp(formState);
  
        if(!res.ok) {
          setError('Something wrong please try again')
        } else {
          alert('Succefull')
          navigate('/')
        }
      }
    }
  }


  return (
    <div className="d-block m-auto w-75 mt-5 form-div text-center border border-light">
      <h1 className="form-title mb-5">Register</h1>
      <form onSubmit={onSubmitinfo}>
        <div className="d-flex flex-column">
          <div className="text-start">
            <p className="top-label-form">Username</p>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="usernameFloating"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onChange}
              />
              <label htmlFor="usernameFloating">User</label>
            </div>
          </div>
          <div className="text-start">
            <p className="top-label-form mt-2">E-Mail</p>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="emailFloating"
                placeholder="email"
                name="email"
                value={email}
                onChange={onChange}
              />
              <label htmlFor="emailFloating">user@user.com</label>
            </div>
          </div>
        </div>
        <div className="text-start">
          <p className="top-label-form mt-2">Password</p>
          <div className="justify-content-around mb-5 flex-wrap row g-3 mt-2">
            <div className="form-floating mb-3 flex-fill m-auto col-auto">
              <input
                type="password"
                className="form-control"
                id="passwordFloating"
                placeholder="password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <label htmlFor="passwordFloating">Password</label>
            </div>
            <div className="form-floating mb-3 flex-fill m-auto col-auto">
              <input
                type="password"
                className="form-control"
                id="passwordFloatingCheck"
                placeholder="password"
                name="checkPass"
                value={checkPass}
                onChange={onChange}
              />
              <label htmlFor="passwordFloatingCheck">Password Check</label>
            </div>
            {
              error && (<p className="alert alert-danger">{error}</p>)
            }
          </div>
        </div>
        <div className="d-grid col-6 m-auto mb-5">
          <button className="btn btn-register btn-lg" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};
