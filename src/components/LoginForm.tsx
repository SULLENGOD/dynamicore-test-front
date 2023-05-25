import { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

type FormElement = FormEvent<HTMLFormElement>;

export const LoginForm = () => {
  const navigate = useNavigate();

  const { formState, onChange } = useForm();
  const { email, password } = formState;

  const [error, setError] = useState("");

  const onSubmit = async (event: FormElement) => {
    event.preventDefault();

    if (email && password !== "") {
      const res = await login(formState);
      const info = await res.json();

      if (!res.ok) {
        setError("Email or password incorrect");
      } else {
        localStorage.setItem("token", info.token);
        navigate("/user");
      }
    }
  };

  return (
    <div className="d-block m-auto w-75 mt-5 form-div text-center border border-light">
      <h1 className="form-title mb-5">Signin</h1>
      {error !== "" && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={onSubmit}>
        <div className="d-flex flex-column">
          <div className="text-start">
            <p className="top-label-form">E-Mail</p>
            <div className="form-floating mb-5">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={onChange}
              />
              <label htmlFor="emailInput">user@user.com</label>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="text-start">
            <p className="top-label-form">Password</p>
            <div className="form-floating mb-5">
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <label htmlFor="passwordInput">password</label>
            </div>
          </div>
        </div>
        <div className="d-grid col-6 m-auto mb-5">
          <button type="submit" className="btn btn-login d-block">
            Send
          </button>
        </div>
      </form>
      <div className="register-link m-3">
        Dont have an account? <a>Click Here!</a>
      </div>
    </div>
  );
};
