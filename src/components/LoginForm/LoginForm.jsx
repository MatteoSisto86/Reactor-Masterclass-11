import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import routes from "../../routes/routes";


export default function LoginForm() {

    const {login, user} = useContext(UserContext);

    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        }
    )

    const handleChange = (e)=>{
        setForm((prev)=>{ return {...prev, [e.target.name] : e.target.value}})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await login(form);
    }


  return (
    <form className="auth_form p-4" onSubmit={handleSubmit}>
            {user && <Navigate to={routes.home}/>}
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" className="auth_input" onChange={handleChange}/>
      </div>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" className="auth_input" onChange={handleChange} />
      </div>
      <div className="mb-3 d-flex justify-content-end">
        <button className="auth_button" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
