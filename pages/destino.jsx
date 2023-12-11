import Head from 'next/head'
import Link from 'next/link';
import { useDestino } from '@/hooks/useDestino';
import { useEffect } from "react";

const Destino = () => {

    const { destinos, listarDestinos, deleteDestino } = useDestino();

    useEffect(() => {
        listarDestinos()
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
                <title>Destino Certo - Destinos</title>
            </Head>

            <div className='container'>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5
                    }}
                >
                    <i style={{ fontSize: 40 }} className="bi bi-airplane" />
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <h1>Lista de Destinos</h1>
                        <Link href="/add-destino" className="btn btn-primary">
                            Cadastrar
                        </Link>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-12 overflow-x-auto">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Destino</th>
                                    <th>Valor</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {destinos.map(({ id, nome, valor }) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{nome}</td>
                                        <td>R$ {valor}</td>
                                        <td>
                                            <Link href={`/update-destino/${id}`} className="btn btn-primary btn-edit m-1">Editar</Link>
                                            <button onClick={() => deleteDestino(id)} className="btn btn-danger btn-edit m-1">Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Destino;