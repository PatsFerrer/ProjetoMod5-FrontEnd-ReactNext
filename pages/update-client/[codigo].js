import { useEffect } from "react";
import style from "../../styles/Home.module.css";
import { useRouter } from 'next/router';
import { useCliente } from "@/hooks/useCliente";
import Head from 'next/head'


const UpdateClient = () => {

  const { client, handleInputChange, buscarCliente, atualizarCliente } = useCliente()

  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {
    buscarCliente(codigo)
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
        <link rel="stylesheet" href="styles/style.css" />
        <link rel="stylesheet" href="styles/mediaquery.css" />

        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        <title>Destino Certo - Atualizar Cliente</title>
      </Head>

      <div className="container mb-2 mt-2" style={{ margin: "0 auto" }}>
        <h1 className={style.h1}>Atualizar Cliente</h1>

        <div className="col-md col-lg">
          <div className="row g-3">

            <div className="col-sm-6">
              <label for="id" className="form-label">ID do Cliente:</label>
              <input readOnly type="text" className="form-control" id="id" value={client.id = codigo} onChange={handleInputChange} name="id" />

            </div>

            <div className="col-sm-6">
              <label for="nome" className="form-label">Nome</label>
              <input required type="text" className="form-control" id="nome" value={client.nome} onChange={handleInputChange} name="nome" />
            </div>

            <div className="col-sm-6">

              <label for="email" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" placeholder="nome@exemplo.com" name="email" value={client.email} onChange={handleInputChange} required />

            </div>

            <div className="col-sm-6">
              <label for="cpf" className="form-label">CPF</label>
              <input type="text" className="form-control" id="cpf" name="cpf" value={client.cpf} onChange={handleInputChange} required />
            </div>

            <div className="col-sm-6">
              <label for="dataNascimento" className="form-label">Data de Nascimento</label>
              <input type="date" className="form-control" id="dataNascimento" name="dataNascimento" value={client.dataNascimento} onChange={handleInputChange} required />
            </div>

            <div className="col-sm-6">
              <label for="telefone" className="form-label">Telefone</label>
              <input type="text" className="form-control" id="telefone" name="telefone" placeholder="Ex.: 11 99999-9999" value={client.telefone} onChange={handleInputChange} required />
            </div>

            <div className="col-sm-6">
              <label for="senha" className="form-label">Senha</label>
              <input type="password" className="form-control" id="senha" name="senha" value={client.senha} onChange={handleInputChange} required />
            </div>

            <br />
            <button
              className="w-100 btn btn-primary btn-lg"
              onClick={atualizarCliente}
            >
              Atualizar Cliente
            </button>

          </div>
        </div>
      </div>
    </>

  );
};

export default UpdateClient;