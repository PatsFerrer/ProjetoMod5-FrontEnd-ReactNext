import React from 'react'

export default function Footer() {
    return (
        <footer>
            <img
                src="imagens/destinoCertoLogo.png"
                alt="Imagem da Logo da Destino Certo"
            />
            
            <div className="compra-segura">
                <strong>COMPRA SEGURA</strong>
                <a href="pagamento.html">Pagamentos</a>
                <a href="contato.html">Fale Conosco</a>
                <a href="promocoes.html">Black Friday</a>
            </div>
            <div className="contato">
                <strong>CONTATO</strong>
                <span>
                    <i className="ph ph-phone" /> 85 3232-3232
                </span>
                <span>
                    <i className="ph ph-at" /> contato@destinocerto.com
                </span>
                <span>
                    <i className="ph ph-map-pin" /> Rua 100 Destino, s/n
                </span>
            </div>
            <div className="redes-sociais">
                <strong>REDES SOCIAIS</strong>
                <div>
                    <span>
                        <a href="https://www.instagram.com/patsferrer/" target="_blank">
                            <i className="ph ph-instagram-logo" />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <i className="ph ph-twitter-logo" />
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/patsferrer" target="_blank">
                            <i className="ph ph-github-logo" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>

    )
}
