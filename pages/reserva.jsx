import Head from 'next/head'
import Link from 'next/link';
import { useReserva } from '@/hooks/useReserva';
import { useEffect } from 'react';

import React from 'react'

export default function Reserva() {

    const { reservas, listarReservas, deleteReserva } = useReserva();

    useEffect(() => {
        listarReservas()
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
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css"
                />

                <script src="https://unpkg.com/@phosphor-icons/web"></script>
                <title>Destino Certo - Reservas</title>
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
                    <i style={{ fontSize: 40 }} className="bi bi-suitcase" />
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <h1>Lista de Reservas</h1>
                        <Link href="/add-reserva" className="btn btn-primary">
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
                                    <th>Cliente</th>
                                    <th>Destino</th>
                                    <th>Valor</th>
                                    <th>Data</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reservas.map(({ id, cliente, destino, data }) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{destino.nome}</td>
                                        <td>R$ {destino.valor}</td>
                                        <td>{new Date(data).toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'})}</td>
                                        <td>
                                            <Link href={`/update-reserva/${id}`} className="btn btn-primary btn-edit m-1">Editar</Link>
                                            <button onClick={() => deleteReserva(id)} className="btn btn-danger btn-edit m-1">Excluir</button>
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
