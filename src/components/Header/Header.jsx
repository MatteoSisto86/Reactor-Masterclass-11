export default function Header({title='Nuovi e di tendenza', subtitle='Giochi di quest anno'}) {
  return (
    <section className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
