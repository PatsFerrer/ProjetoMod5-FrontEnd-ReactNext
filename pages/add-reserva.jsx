import { useCliente } from "@/hooks/useCliente";
import { useDestino } from "@/hooks/useDestino";
import { useReserva } from "@/hooks/useReserva";
import Head from 'next/head'

import React, { useEffect } from 'react'

export default function AddReserva() {

    const { reserva, handleInputChange, handleInputChangeCliente, handleInputChangeDestino, criarReserva } = useReserva()
    const { clients, listarClientes } = useCliente()
    const { destinos, listarDestinos } = useDestino()

    useEffect(() => {
        listarClientes()
        listarDestinos()
    }, [])

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
                <title>Destino Certo - Cadastrar Reserva</title>
            </Head>
            <div className="container mb-2 mt-2" style={{ margin: "0 auto" }}>
                <h1>Inserir Reserva</h1>
                <div className="row">
                    <div className="col-md col-lg">
                        <div className="row g-3">

                            <div className="col-sm-6">
                                <label htmlFor="client" className="form-label">Cliente:</label>                                
                                <select
                                    className="form-control"
                                    id="cliente"
                                    name="cliente"
                                    required
                                    onChange={handleInputChangeCliente}
                                >
                                    {clients.map(({ id, nome }) => (
                                        <option key={id} value={id}>
                                            {nome}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="destino" className="form-label">Destino</label>
                                <select
                                    className="form-control"
                                    id="destino"
                                    name="destino"
                                    required
                                    onChange={handleInputChangeDestino}                             
                                >
                                    {destinos.map(({ id, nome }) => (
                                        <option key={id} value={id}>
                                            {nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                          
                            <div className="col-sm-6">
                                <label htmlFor="data" className="form-label">Data/Hora</label>
                                <input type="datetime-local" className="form-control" id="data" name="data" value={reserva.data} onChange={handleInputChange} required />
                            </div>

                            <br />
                            <button
                                className="w-100 btn btn-primary btn-lg"
                                onClick={criarReserva}
                            >
                                Inserir Reserva
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
