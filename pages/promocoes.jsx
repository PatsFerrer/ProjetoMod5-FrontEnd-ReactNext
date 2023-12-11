import React from 'react'
import Head from 'next/head'

export default function Promocoes() {
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
                
                <script src="https://unpkg.com/@phosphor-icons/web"></script>
                <title>Destino Certo - Promoções</title>

            </Head>

            <main>
                <div className="position-relative overflow-hidden text-center ">
                    <img
                        className="capinha card-img-top"
                        src="imagens/capa2.jpg"
                        alt="Imagem de um homem parado de costas, com mochila de viagem observando as montanhas."
                    />
                    <div className="col-md-5 p-lg-3 mx-auto my-0">
                        <h3 className="display-4 font-weight-normal">Explore o mundo!</h3>
                        <p className="lead font-weight-normal">
                            Nossas promoções internacionais.
                        </p>
                        <a className="btn btn-outline-secondary" href="#">
                            Saiba mais
                        </a>
                    </div>
                </div>
                <div className="row m-2" id="viagens">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card h-100">
                            <div className="card-body">
                                <img
                                    className="card-img-top"
                                    src="imagens/uruguai.jpg"
                                    alt="Imagem de Uruguai"
                                />
                                <h5 className="card-title m-0 text-center">Uruguai</h5>
                                <small>a partir de:</small>
                                <p className="h5 m-0 p-0 ">R$ 757</p>
                                <small>Apenas Ida</small>
                                <p className="card-text">
                                    O Uruguai é um destino cativante na América do Sul, conhecido por
                                    suas praias deslumbrantes, cidades históricas e cultura acolhedora.
                                    Explore a charmosa e querida capital, Montevidéu, com sua
                                    arquitetura colonial e vibrante vida noturna, ou relaxe nas belas
                                    praias de Punta del Este. Descubra a rica herança cultural do país
                                    através da música, dança e deliciosa culinária.
                                </p>
                                <a href="#" className="btn btn-outline-secondary">
                                    Comprar
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <img
                                    className="card-img-top"
                                    src="imagens/londres.jpg"
                                    alt="Imagem de Londres"
                                />
                                <h5 className="card-title m-0 text-center">Inglaterra</h5>
                                <small>a partir de:</small>
                                <p className="h5 m-0 p-0 ">R$ 2.304</p>
                                <small>Apenas Ida</small>
                                <p className="card-text">
                                    A Inglaterra é uma nação encantadora, repleta de história e cultura
                                    vibrante. Explore os icônicos pontos turísticos de Londres, como o
                                    Big Ben e o Buckingham Palace, mergulhe na rica história em
                                    Stonehenge e descubra pitorescas paisagens rurais em Cotswolds. Uma
                                    viagem para a Inglaterra é uma jornada inesquecível e maravilhosa
                                    para os amantes de arte e tradições milenares.
                                </p>
                                <a href="#" className="btn btn-outline-secondary">
                                    Comprar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-sm-6 ">
                        <div className="card h-100">
                            <div className="card-body">
                                <img
                                    className="card-img-top"
                                    src="imagens/argentina.jpg"
                                    alt="Imagem da Argentina"
                                />
                                <h5 className="card-title m-0 text-center">Argentina</h5>
                                <small>a partir de:</small>
                                <p className="h5 m-0 p-0 ">R$ 985</p>
                                <small>Apenas Ida</small>
                                <p className="card-text">
                                    A Argentina é um país apaixonante na América do Sul, oferecendo uma
                                    mistura única de paisagens deslumbrantes, cultura rica e delícias
                                    gastronômicas. Explore a elegante cidade de Buenos Aires, famosa por
                                    seus tangos envolventes e arquitetura europeia. Deleite-se com a
                                    deliciosa carne assada e os renomados vinhos argentinos, enquanto
                                    desfruta da calorosa hospitalidade dos argentinos.
                                </p>
                                <a href="#" className="btn btn-outline-secondary">
                                    Comprar
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <img
                                    className="card-img-top"
                                    src="imagens/chile.jpg"
                                    alt="Imagem do Chile"
                                />
                                <h5 className="card-title m-0 text-center">Chile</h5>
                                <small>a partir de:</small>
                                <p className="h5 m-0 p-0 ">R$ 1.001</p>
                                <small>Apenas Ida</small>
                                <p className="card-text">
                                    O Chile é um país incomparável na América do Sul, abraçando uma
                                    diversidade de paisagens impressionantes. Descubra o incrível
                                    deserto do Atacama, o mais árido do mundo, com paisagens lunares e
                                    lagoas de sal. Explore majestosas montanhas dos Andes, ideais para
                                    esportes de inverno. Uma cultura rica e com um povo acolhedor, é uma
                                    experiência que cativa os viajantes em busca de uma incrível beleza
                                    natural.
                                </p>
                                <a href="#" className="btn btn-outline-secondary">
                                    Comprar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
