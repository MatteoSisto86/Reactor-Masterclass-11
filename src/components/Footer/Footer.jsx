import styles from "./Footer.module.css"

export default function Footer(){
    return (
        <footer className={"container-fluid bg-primaryC text-secondaryC " + styles.border_footer}>
            <section className="row">
                <div className="col-12 col-md-9">
                    <p>Dati presi da: https://rawg.io/apidocs</p>
                    <p>Developer: Matteo Sisto</p>
                    <p>Corso: Masterclass React 11</p>
                </div>
                <div className="col-12 col-md-3">
                    <p>@copyright React Masterclass 11</p>
                </div>
            </section>
        </footer>
    )
}