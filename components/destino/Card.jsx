import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Card({ destino }) {

    const { nome, valor, descricao, imagem } = destino

    return (
        <div className="col">
            <div className="card shadow-sm h-100" >
                <div className="card" style={{height: 200}}>
                    <Image
                        className="img-fluid"
                        fill={true}
                        objectFit='cover'
                        sizes='100%'                      
                        title={nome}
                        src={imagem}
                        alt={nome}
                    />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5>{nome}</h5>
                    <small>Apenas Ida</small>
                    <h3>R$ {valor}</h3>
                    <p className="card-text">
                        {descricao}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <Link href={`/perfil-destino/${destino.id}`} className="btn btn-primary btn-edit m-1">Saiba mais</Link>
                        </div>
                        <small className="text-muted">Em até 12x</small>
                    </div>
                </div>
            </div>
        </div>


    )
}
