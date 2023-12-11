import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="imagens/capa1.jpg"
                        className="d-block w-100"
                        alt="Imagem de três pessoas viajando com mochilas nas costas, elas estão paradas e bebendo água."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Explore lugares inesquecíveis</h5>
                        <p>Economize muito com as melhores ofertas de viagens.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="imagens/capa01.jpg"
                        className="d-block w-100"
                        alt="Imagem de uma estrada com montanhas congeladas à esquerda e um lago à direita numa noite com céu alaranjado."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Aventuras incríveis começam aqui</h5>
                        <p>Viagens que despertam a sua alma e enriquecem a sua mente.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="imagens/capa4.jpg"
                        className="d-block w-100"
                        alt="Imagem de um homem caminhando pelo campo de mochila nas costas, com um avião voando ao fundo."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Descubra o encanto do mundo</h5>
                        <p>Viagens que criam memórias duradouras.</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
