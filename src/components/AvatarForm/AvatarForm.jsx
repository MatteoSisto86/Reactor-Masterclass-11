import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import supabase from "../../database/supabase";



export default function AvatarForm() {
  const [file, setFile] = useState();
  const { profile, avatarUpdate } = useContext(UserContext);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Prenderci l'estensione del file
    const fileExt = file.name.split(".").pop();
    const fileName = `${profile.id}${Math.random()}.${fileExt}`;
    await supabase.storage.from("avatars").upload(fileName, file);
    await avatarUpdate({ id: profile.id , avatar_url: fileName });
  };

  return (
    <form className="auth_form p-4" onSubmit={handleSubmit}>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <input type="file" className="form-control" onChange={handleChange} />
      </div>

      <div className="mb-3 d-flex justify-content-end">
        <button className="auth_button" type="submit">
          Carica Immagine
        </button>
      </div>
    </form>
  );
}
