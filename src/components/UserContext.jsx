import { createContext, useEffect, useState } from "react";
import supabase from "../database/supabase";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const getUser = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (session) {
      const { user } = session;
      await setUser(user);
      let { data: profiles } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id);
      await setProfile(profiles[0]);
      console.log(profile);
      
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  };

  const register = async (newUser) => {
    await supabase.auth.signUp(newUser);
    await getUser();
  };

  const login = async (loggedUser) => {
    await supabase.auth.signInWithPassword(loggedUser);
    await getUser();
  };

  const userUpdate = async (newProfile) => {
    await supabase
      .from("profiles")
      .update(newProfile)
      .eq("id", user.id)
      .select();

      await getUser();
  };

  const avatarUpdate = async (newFile)=>{
    await supabase
      .from("profiles")
      .upsert(newFile)
      .select();
      await getUser();
  }

  return (
    <UserContext.Provider value={{ user, profile, logout, register, login, userUpdate, avatarUpdate }}>
      {children}
    </UserContext.Provider>
  );
}
