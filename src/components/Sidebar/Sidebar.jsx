import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import styles from './Sidebar.module.css'
export default function Sidebar(){

    const API_KEY = import.meta.env.VITE_API_KEY;
    const genres = useFetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    

    return (
        <nav className="bg-primaryC text-secondaryC vh-100 pt-5 ps-4">
            <h3>Generi</h3>

                {genres && genres.results.map(genre =>{
                    return <Link className={styles.sidebar_link} key={genre.id} to={`/genre/${genre.slug}/${genre.name}`}>{genre.name}</Link>
                    
                })}
     
        </nav>
    )
}