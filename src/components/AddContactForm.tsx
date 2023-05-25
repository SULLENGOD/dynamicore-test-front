import { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { addContact } from "../api/api";

type FormElement = FormEvent<HTMLFormElement>;

export const AddContactForm = () => {
    const token = localStorage.getItem("token") ?? "";

    const [ error, setError ] = useState("");

    const { formState, onChange } = useForm();
    const { username, email } = formState;

    const sendContact = async(event: FormElement) => {
        event.preventDefault();

        if(username && email !== ""){
            const res = await addContact(formState, token);
            
            if(res.ok) {
                setError('Something wrong, please try again')
            } 
        }

        window.location.reload();
        
    }
  return (
    <div>
        <div className="d-flex justify-content-end m-5 mb-3 "><p>
        <button
          className="btn btn-add border border-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Add Contact
        </button>
      </p></div>
      
      <div className="collapse" id="collapseExample">
        <div className="d-block m-auto w-75 mt-5 mb-5 form-div text-center border border-light">
          <div className="card">
            <h1 className="form-title mb-5">Add Contact</h1>
            {
                error && (<p className="alert alert-danger">{error}</p>)
            }
            <form onSubmit={sendContact}>
              <div className="d-flex flex-column">
                <div className="text-start">
                  <p className="top-label-form">Contact username</p>
                  <div className="form-floating mb-5">
                    <input
                      type="text"
                      className="form-control"
                      id="emailInput"
                      placeholder="name@example.com"
                      name="username"
                      value={username}
                      onChange={onChange}
                    />
                    <label htmlFor="emailInput">user123</label>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="text-start">
                  <p className="top-label-form">Contact E-mail</p>
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
                    <label htmlFor="emailInput">contact@contact</label>
                  </div>
                </div>
              </div>
              <div className="d-grid col-6 m-auto mb-3">
                <button className="btn btn-login d-block" type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
