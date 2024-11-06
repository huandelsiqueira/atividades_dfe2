import { useEffect, useState } from "react";
import './meta.css'

export default function Meta({data}) {
    const { nome, descricao, dataInicial, dataFinal } = data;
    
    return (
        <>
            <section className="metas-grid">
                <h2>{nome}</h2>
                <p><strong>Descrição:</strong> {descricao}</p>
                <p><strong>Data inicial:</strong> {new Date(dataInicial).toLocaleDateString()}</p>
                <p><strong>Data final:</strong> {new Date(dataFinal).toLocaleDateString()}</p>
            </section>
        </>
      );
}