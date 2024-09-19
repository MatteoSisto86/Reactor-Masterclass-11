import { useEffect, useState } from "react";
import supabase from "../../database/supabase";
import styles from "./ReviewsSection.module.css";

export default function ReviewsSection({ profile, game }) {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState();

  const getReviews = async () => {
    let { data: reviews} = await supabase.from("reviews").select("*, profile_username: profiles(username)");
    await setReviews(()=> reviews);
    console.log(reviews);
    
  };

  useEffect(()=>{
    getReviews();
  }, [])

  const handleChange = (e) => {
    setReview(() => e.target.value);
  };

  const handleClick = async () => {
    await supabase
      .from("reviews")
      .insert([
        {
          profile_id: profile.id,
          game_id: game.id,
          game_name: game.name,
          description: review,
        },
      ])
      .select();

    await getReviews();
    
  };

  return (
    <>
      <div className={styles.show_reviews}>
        {reviews && reviews.map(review => {
            return (
                <div key={review.id}>
                    <p>{review.description}</p>
                    <p>{review.profile_username.username}</p>
                    <hr />
                </div>
            )
        })}
      </div>
      <div className="d-flex">
        <input
          type="text"
          className={styles.input_reviews}
          onChange={handleChange}
        />
        <button className={styles.button_reviews} onClick={handleClick}>
          Invia
        </button>
      </div>
    </>
  );
}
