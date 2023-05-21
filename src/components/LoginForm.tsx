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
    <div className="d-block m-auto w-75 mt-5 form-div text-center">
      <h1 className="form-title mb-5">Signin</h1>
      <p className=" alert alert-danger">{error}</p>
      <form onSubmit={onSubmit}>
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
          <label htmlFor="emailInput">Email address</label>
        </div>
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
          <label htmlFor="passwordInput">Password</label>
        </div>
        <div className="d-flex justify-content-center m-3">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
