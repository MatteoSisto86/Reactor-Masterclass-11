import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import routes from "../../routes/routes";

export default function RegisterForm(){


    const{register, user} = useContext(UserContext);

    const [form, setForm] = useState(
        {
            email: '',
            password: '',
            options: {
                data: {
                    first_name: '',
                    last_name: '',
                    username: ''
                }
            }
        }
    )

    const handleChange = (e)=>{
        setForm((prev)=>{ return {...prev, [e.target.name] : e.target.value}});
    }

    const profileHandleChange = (e)=>{
        setForm((prev)=>{ return {...prev, options:{
            data: {
                ...prev.options.data,
                [e.target.name] : e.target.value
            }
        }}});

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        register(form)
    }

    return (
        <form className="auth_form p-4" onSubmit={handleSubmit}>
            {user && <Navigate to={routes.home}/>}
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <label htmlFor="first_name">Nome</label>
              <input id="first_name" type="text" name="first_name" className="auth_input" onChange={profileHandleChange}/>
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <label htmlFor="last_name">Cognome</label>
              <input id="last_name" type="text" name="last_name" className="auth_input" onChange={profileHandleChange}/>
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" name="username" className="auth_input" onChange={profileHandleChange} />
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" className="auth_input" name="email" onChange={handleChange}/>
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" className="auth_input" name="password" onChange={handleChange}/>
            </div>
            <div className="mb-3 d-flex justify-content-end">
              <button className="auth_button" type="submit">Registrati</button>
            </div>
          </form>
    )
}