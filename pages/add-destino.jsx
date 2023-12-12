import { useDestino } from "@/hooks/useDestino";
import Head from 'next/head'

const AddDestino = () => {

  const { destino, handleInputChange, criarDestino } = useDestino()
  

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles/style.css" />
        <link rel="stylesheet" href="styles/mediaquery.css" />

        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>Destino Certo - Cadastrar Destino</title>
      </Head>
      <div className="container mb-2 mt-2" style={{ margin: "0 auto" }}>
        <h1>Cadastrar Destino</h1>
        <div className="row">
          <div className="col-md col-lg">

            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" value={destino.nome} onChange={handleInputChange} name="nome" />

              </div>
              <div className="col-sm-6">

                <label htmlFor="imagem" className="form-label">URL Imagem</label>
                <input type="text" className="form-control" id="email" name="imagem" value={destino.imagem} onChange={handleInputChange} required />

              </div>

              <div className="col-sm-6">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <input type="text" className="form-control" id="cpf" name="descricao" value={destino.descricao} onChange={handleInputChange} required />
              </div>

              <div className="col-sm-6">
                <label htmlFor="valor" className="form-label">Valor</label>
                <input type="text" className="form-control" id="valor" name="valor" value={destino.valor} onChange={handleInputChange} required />
              </div>

              <br />
              <button
                className="w-100 btn btn-primary btn-lg"
                onClick={criarDestino}
              >
                Inserir Destino
              </button>
            </div>

            
          </div>
        </div>

      </div>
    </>
  );
};

export default AddDestino;