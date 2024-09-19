import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import List from "../components/List/List";


export default function GenreView() {
    const {name} = useParams();
    const games = useLoaderData();
    
    

  return (
    <>
      <Header title={"Giochi per genere"} subtitle={`Genere scelto: ${name}`} />
      <List>
        {games.results.map((game)=>{
            return (
                <List.Card key={game.id}>
                    <List.Card.Img src={game.background_image}/>
                    <List.Card.Paragraph>{game.name}</List.Card.Paragraph>
                </List.Card>
            )
        })}
      </List>
    </>
  );
}

export async function gamesByGenreLoader({params}) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const promise = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&genres=${params.slug}`
  );
  const json = await promise.json();
  return json;
}