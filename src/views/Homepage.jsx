import { useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import List from "../components/List/List";

export default function Homepage() {
  const games = useLoaderData();
  return (
    <>
      <Header />
      <List>
        {
          games.results.map((game) => {         
              return (
                <List.Card key={game.id} id={game.id}>
                  <List.Card.Img src={game.background_image} />
                  <List.Card.Paragraph>{game.name}</List.Card.Paragraph>
                </List.Card>
              );
          })}
      </List>
     
    </>
  );
}

export async function gamesLoader() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const promise = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&dates=2023-08-01,2024-09-01`
  );
  const json = await promise.json();
  return json;
}
