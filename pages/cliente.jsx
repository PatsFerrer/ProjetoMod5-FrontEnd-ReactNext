import Head from 'next/head'
import Link from 'next/link';
import { useCliente } from '@/hooks/useCliente';
import { useEffect } from 'react';
import moment from 'moment'

const Cliente = () => {

  const { clients, listarClientes, deleteCliente } = useCliente();

  useEffect(() => {
    listarClientes()
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
        <title>Destino Certo - Clientes</title>
      </Head>

      <main className="container mb-2 mt-2">

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5
          }}
        >
          <i style={{ fontSize: 40 }} className="bi bi-people" />
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <h1>Lista de Clientes</h1>
            <Link href="/add-client" className="btn btn-primary">
              Cadastrar
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 overflow-x-auto">

            <table className="table container tabela">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>CPF</th>
                  <th>Data Nascimento</th>
                  <th>Telefone</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(({ id, nome, email, cpf, dataNascimento, telefone }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{nome}</td>
                    <td>{email}</td>
                    <td>{cpf}</td>
                    <td>{moment(dataNascimento).format('DD/MM/yyy')}</td>

                    <td>{telefone}</td>
                    <td>
                      <Link href={`/update-client/${id}`} className="btn btn-primary btn-edit m-1">Editar</Link>
                      <button onClick={() => deleteCliente(id)} className="btn btn-danger btn-edit m-1">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </>
  );
};

export default Cliente;