import { useEffect, useState } from "react";
import supabase from "../../database/supabase";

export default function HeartFavourite({ profile, game }) {
  const [isFavourite, setIsFavourite] = useState(false);

  const getFavourite = async () => {
    let { data: favourites, error } = await supabase
      .from("favourites")
      .select("*")
      .eq("profile_id", profile.id)
      .eq("game_id", game.id);

      if(favourites.length > 0){
        setIsFavourite(true);
      }
      
  };

  useEffect(()=>{
    getFavourite();
  }, [])

  const handleClick = async () => {
    await setIsFavourite((prev) => !prev);

    if (!isFavourite) {
      await supabase
        .from("favourites")
        .insert([
          { profile_id: profile.id, game_id: game.id, game_name: game.name },
        ])
        .select();
    } else {
      await supabase
        .from("favourites")
        .delete()
        .eq("profile_id", profile.id)
        .eq("game_id", game.id);
    }
  };

  return (
    <i
      className={`${
        isFavourite ? "fa-solid" : "fa-regular"
      } fa-heart fa-2x text-accentC pointer`}
      onClick={handleClick}
    ></i>
  );
}
