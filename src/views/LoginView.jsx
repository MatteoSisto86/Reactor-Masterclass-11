import LoginForm from "../components/LoginForm/LoginForm";

export default function LoginView() {
  return (
    <main className="container">
      <section className="row vh-100 justify-content-center align-items-center">
        <article className="col-12 col-md-8">
            <LoginForm />
        </article>
      </section>
    </main>
  );
}
