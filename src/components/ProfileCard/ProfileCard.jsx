import { useContext, useEffect, useState } from "react";
import styles from "./ProfileCard.module.css";
import { UserContext } from "../UserContext";
import Ryu from "../../assets/ryu.jpg";
import supabase from "../../database/supabase";

export default function ProfileCard() {
  const { profile } = useContext(UserContext);
  const URL = import.meta.env.VITE_SUPABASE_URL_KEY;

  const [favouritesList, setFavouritesList] = useState();
  const [userReviews, setUserReviews] = useState();

  const getUserFavourites = async () => {
    let { data: favourites, error } = await supabase
      .from("favourites")
      .select("*")
      .eq("profile_id", profile.id);

    await setFavouritesList(() => favourites);
  };

  const getUserReviews = async () => {
    let { data: reviews} = await supabase.from("reviews").select("*").eq('profile_id', profile.id);
    setUserReviews(()=>reviews);
  };

  useEffect(() => {
    getUserFavourites();
    getUserReviews();
  }, []);

  return (
    <div className={styles.profile_card}>
      <div className="d-flex justify-content-around align-items-center border_bottom_secondaryC pb-2">
        <img
          src={
            profile.avatar_url
              ? `${URL}/storage/v1/object/public/avatars/${profile.avatar_url}`
              : Ryu
          }
          className="img-fluid rounded-circle"
          width={150}
          alt=""
        />
        <div>
          <p>Nome: {profile.first_name}</p>
          <p>Cognome: {profile.last_name}</p>
          <p>Username: {profile.username}</p>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-12 col-md-6">
          <h3>I tuoi giochi preferiti</h3>
          <ul>
            {favouritesList &&
              favouritesList.map((favourite) => {
                return <li key={favourite.id}>{favourite.game_name}</li>;
              })}
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <h3>Le tue recensioni</h3>
          {userReviews && userReviews.map(review =>{
            return (
              <p key={review.id}>{review.game_name} : {review.description}</p>
            )
          })}
        </div>
      </div>
    </div>
  );
}
