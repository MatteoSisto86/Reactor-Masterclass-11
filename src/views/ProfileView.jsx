import { Link, Navigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import routes from "../routes/routes";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";

export default function ProfileView(){
    const {profile} = useContext(UserContext);
    return (
        <main className="container">
            <section className="row min-vh-100 justify-content-center align-items-center">
                <article className="col-12 col-md-8">
                    {profile && 
                        <>
                            <ProfileCard />
                            <Link to={routes.settings}>
                                <button className="profile_button mt-2">Modifica Personaggio</button>
                            </Link>
                        
                        </>
                    ||
                        <Navigate to={routes.home}/>
                    }
                </article>
            </section>
        </main>
    )
}