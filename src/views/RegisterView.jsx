import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function RegisterView() {
  return (
    <main className="container">
      <section className="row vh-100 justify-content-center align-items-center">
        <article className="col-12 col-md-8">
          <RegisterForm />
        </article>
      </section>
    </main>
  );
}
