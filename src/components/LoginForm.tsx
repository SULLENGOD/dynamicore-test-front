import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

type FormElement = FormEvent<HTMLFormElement>
 
export const LoginForm = () => {

  const navigate = useNavigate();

    const { formState, onChange } = useForm();
    const { email, password } = formState;

    const onSubmit = async (event: FormElement) => {
        event.preventDefault();
        
        if(email && password !== ''){
          const res = await login(formState);
          const info = await res.json();
          localStorage.setItem("token", info.token);
          navigate('/user')
        }
    }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
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
      <div className="form-floating">
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
      <button type="submit" className="btn btn-primary" >
        Send
      </button>
    </form>
  );
};
