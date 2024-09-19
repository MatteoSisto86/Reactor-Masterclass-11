import AvatarForm from "../components/AvatarForm/AvatarForm";
import SettingsForm from "../components/SettingsForm/SettingsForm";

export default function SettingsView(){
    return (
        <main className="container">
          <section className="row vh-100 justify-content-center align-items-center">
            <article className="col-12 col-md-8">
              <SettingsForm />
              <AvatarForm />
            </article>
          </section>
        </main>
      );
}