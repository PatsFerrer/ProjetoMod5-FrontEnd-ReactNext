import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useDestino } from "@/hooks/useDestino";
import Head from 'next/head'
import Link from 'next/link'

const UpdateDestino = () => {

  const { destino, buscarDestino } = useDestino()

  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {
    buscarDestino(codigo)
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="styles/style.css" />
        <link rel="stylesheet" href="styles/mediaquery.css" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>Destino Certo - {destino.nome}</title>

      </Head>

      {/* capa */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={destino.imagem}
            className="d-block w-100"
            alt="Imagem de três pessoas viajando com mochilas nas costas, elas estão paradas e bebendo água."
          />
          <div className="carousel-caption d-none d-md-block">

            <h5>Viagem para {destino.nome}</h5>
            <p>Economize muito com as melhores ofertas de viagens.</p>
          </div>
        </div>

      </div>
      {/* capa fim */}

      <main className="text-center">
     
        <section className="container p-2 card mt-3 mb-3">

          <h1 className="display-4 font-weight-normal text-center">Conheça {destino.nome}!</h1>

          <div className="row g-2">

            <div className="col-lg-6 text-start">
              <h2>Detalhes</h2>
              <p>
                <b>Local:</b> {destino.nome}
              </p>
              <p><b>Preço</b> R$ {destino.valor}</p>
            </div>

            <div className="col-lg-6 text-start">
              <h2>Sobre</h2>
              <p>
                {destino.descricao}
              </p>
            </div>

          </div>

          <div className="d-grid mb-2">
            <Link href="/add-reserva" className="btn btn-primary">
              Reservar
            </Link>
          </div>

          <img
            className="img-fluid rounded"
            src={destino.imagem}
            alt=""
          />
      
        </section>

        {/* Comentários */}
        <section className="container card p-4 mb-3" id="comentarios">
          <div className="d-flex justify-content-between align-items-center">
            <h4>
              Comentários sobre <strong>{destino.nome}</strong>
            </h4>
            <div className="stars">
              <i className="star bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 mb-3">
            <div className="col">
              <div className="card" style={{ minHeight: 200 }}>
                <div className="card-body">
                  <h5 className="card-title">Usuário</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Viagem maravilhosa!
                  </h6>
                  <p className="card-text">
                    Comprei essa viagem por um valor baixíssimo! Valeu a pena a experiência, foi única! Obrigado, Destino Certo! Com certeza, comprarei mais viagens no site.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ minHeight: 200 }}>
                <div className="card-body">
                  <h5 className="card-title">Usuário</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Viagem Transformadora!
                  </h6>
                  <p className="card-text">
                    Caramba! Sabe aquele filme 'Comer, Rezar e Amar'? Eu não imaginava o quanto essa viagem
                    iria ajudar a me encontrar.
                    Obrigado, Destino Certo.. por me ajudar a achar essa viagem que mudou a minha vida!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* Fim Comentários */}

      </main>
    </>

  );
};

export default UpdateDestino;