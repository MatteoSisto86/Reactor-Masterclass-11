import { createBrowserRouter } from "react-router-dom";
import routes from "../routes/routes";
import Layout from "../components/Layout";
import Homepage, { gamesLoader } from "../views/Homepage";
import GenreView, { gamesByGenreLoader } from "../views/GenreView";
import AuthenticationLayout from "../components/AuthenticationLayout";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";
import ProfileView from "../views/ProfileView";
import SettingsView from "../views/SettingsView";
import DetailView, { detailLoader } from "../views/DetailView";

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homepage />,
                loader: gamesLoader
            },
            {
                path: routes.genre,
                element: <GenreView />,
                loader: gamesByGenreLoader
            }
        ]
    },
    {
        path: routes.auth,
        element: <AuthenticationLayout />,
        children: [
            {
                path: routes.register,
                element: <RegisterView />
            },
            {
                path: routes.login,
                element: <LoginView />
            },
            {
                path: routes.profile,
                element: <ProfileView />
            },
            {
                path: routes.settings,
                element: <SettingsView />
            },
        ]
    },
    {
        path: routes.detail,
        element: <DetailView />,
        loader: detailLoader
    }
])

export default router;