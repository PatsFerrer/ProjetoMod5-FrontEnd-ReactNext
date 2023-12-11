import React from 'react'
import Head from 'next/head'
import Link from 'next/link';

export default function Entrar() {
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
                <link rel="stylesheet" href="styles/entrar.css" />

                <script src="https://unpkg.com/@phosphor-icons/web"></script>
                <title>Destino Certo - Login</title>
            </Head>

            <main
                className="main-entrar background-img mb3"
                style={{ height: "85vh", display: "flex", alignItems: "center" }}
            >
                <section className="container">

                    <div className="container cadastro-cliente">
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                    />
                                    <div className="invalid-feedback">
                                        Insira um endereço de e-mail válido.
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="email"
                                        placeholder="Senha"
                                    />
                                    <div className="invalid-feedback">Insira uma senha válida.</div>
                                </div>
                            </div>
                            <Link
                                href="/"
                                className="w-100 btn btn-primary btn-lg mb-2"
                                type="button"
                            >
                                Entrar
                            </Link>
                            <Link href="#">Esqueceu a senha?</Link>
                            <hr className="my-2" />
                            
                            <Link href="/add-client" className="w-100 btn btn-primary btn-lg btn-criar">
                                Cadastrar
                            </Link>
                        </form>
                    </div>

                </section>
            </main>

        </>
    )
}
