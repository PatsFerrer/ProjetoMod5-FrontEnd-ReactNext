import Head from 'next/head'
import { useContato } from '@/hooks/useContato';
import { useEffect } from 'react';

export default function Contato() {

    const { contatos, listarContatos, deleteContato } = useContato();

    useEffect(() => {
        listarContatos()
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
                <title>Destino Certo - Contato</title>
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
                    <i style={{ fontSize: 40 }} className="bi bi-envelope" />
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <h1>Lista de Contatos</h1>                      
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
                                    <th>Mensagem</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contatos.map(({ id, nome, email, mensagem }) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{nome}</td>
                                        <td>{email}</td>
                                        <td>{mensagem}</td>
                                        <td>
                                            <button onClick={() => deleteContato(id)} className="btn btn-danger btn-edit m-1">Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </>
    )
}
