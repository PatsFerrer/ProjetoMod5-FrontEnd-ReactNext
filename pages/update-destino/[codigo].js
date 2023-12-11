import { useEffect } from "react";
import style from "../../styles/Home.module.css";
import { useRouter } from 'next/router';
import { useDestino } from "@/hooks/useDestino";
import Head from 'next/head'
 
 
const UpdateDestino = () => {

  const { destino, handleInputChange, buscarDestino, atualizarDestino } = useDestino()

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>Destino Certo - Destino</title>
      </Head>

      <div className="container mb-2 mt-2" style={{ margin: "0 auto" }}>
        <h1 className={style.h1}>Atualizar Destino</h1>

        <div className="col-md col-lg">
          <div className="row g-3">

            <div className="col-sm-6">
              <label for="id" className="form-label">ID do Destino:</label>
              <input readOnly type="text" className="form-control" id="id" value={destino.id = codigo} onChange={handleInputChange} name="id" />

            </div>

            <div className="col-sm-6">
              <label for="nome" className="form-label">Nome</label>
              <input required type="text" className="form-control" id="nome" value={destino.nome} onChange={handleInputChange} name="nome" />
            </div>

            <div className="col-sm-6">
              <label for="valor" className="form-label">Valor</label>
              <input type="text" className="form-control" id="valor" name="valor" value={destino.valor} onChange={handleInputChange} required />
            </div>         
        
            <div className="col-sm-6">
              <label for="imagem" className="form-label">Imagem URL</label>
              <input type="text" className="form-control" id="imagem" name="imagem" placeholder="http://imagem.com" value={destino.imagem} onChange={handleInputChange} required />
            </div>

            <div className="col">
              <label for="descricao" className="form-label">Descrição</label>
              <textarea style={{ resize: "none" }} type="text" className="form-control" id="cpf" name="descricao" value={destino.descricao} onChange={handleInputChange} required rows={3} />
            </div>

            <br />
            <button
              className="w-100 btn btn-primary btn-lg"
              onClick={atualizarDestino}
            >
              Atualizar Destino
            </button>

          </div>
        </div>
      </div>

    </>
  );
};
 
export default UpdateDestino;