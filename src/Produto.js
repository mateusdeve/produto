import React from 'react'
import './App.css'

const Produto = ( {dados} ) => {
    return (
        <div className="container-card">
            <div className="card">
                <div>
                <h1 className="title">Produto: {dados.nome}</h1>
                <h2 className="valor">Valor: R$ {dados.preco}</h2>
                <div className="content">
                    <div className="img" >
                        <img style={{width: '100%'}} src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Produto
