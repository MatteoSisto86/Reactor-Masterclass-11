import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout(){
    return (
        <>
            <Navbar />
            <main className="container-fluid">
                <section className="row">
                    <div className="col-12 col-md-2 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9">
                        <Outlet />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}