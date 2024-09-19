import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import HeartFavourite from "../components/HeartFavourite/HeartFavourite";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";

export default function DetailView() {
  const game = useLoaderData();
  console.log(game);
  
  const { profile } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <main
        className="container-fluid text-secondaryC py-5 min-vh-100"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${game.background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="row">
          <article className="col-12 py-0">
            <h1 className="text-center">{game.name}</h1>
            <h2 className="text-center">{game.released}</h2>
          </article>
        </section>
        <section className="row">
          <article className="col-12 col-md-6 py-0">
            <h3>Dettagli:</h3>
            <p>{game.description_raw}</p>
          </article>
          {profile && (
            <article className="col-12 col-md-6">
              <div className="d-flex justify-content-center">
                <p className="text-end me-3">Aggiungi ai preferiti</p>
                <HeartFavourite profile={profile} game={game}/>
              </div>
              <h3 className="text-center">Lascia la tua recensione</h3>
              <ReviewsSection profile={profile} game={game}/>
            </article>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function detailLoader({ params }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const promise = await fetch(
    `https://api.rawg.io/api/games/${params.id}?key=${API_KEY}`
  );
  const json = await promise.json();
  return json;
}
