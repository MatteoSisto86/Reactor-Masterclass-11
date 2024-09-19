import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function SettingsForm() {
  const { userUpdate } = useContext(UserContext);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
  });

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    userUpdate(form);
  };

  return (
    <form className="auth_form p-4" onSubmit={handleSubmit}>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <label htmlFor="first_name">Nome</label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          className="auth_input"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <label htmlFor="last_name">Cognome</label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          className="auth_input"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          className="auth_input"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 d-flex justify-content-end">
        <button className="auth_button" type="submit">
          Modifica
        </button>
      </div>
    </form>
  );
}
