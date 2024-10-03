"use client"

import { useState } from 'react';

export default function Produto() {
    const [quantidade, setQuantidade] = useState(1);

    const incrementar = () => {
        setQuantidade(quantidade + 1);
    };

    const decrementar = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    return (
        <section className="w-1/2 h-screen flex flex-col justify-start items-start p-6 bg-white">
            <h1 className="text-3xl font-bold mb-4">Nome Do Produto</h1>
            <p className="mb-2">Descrição do produto</p>
            <p className="mb-4">VALOR</p>
            <p className="mb-4">
                Detalhes do produto: <br />
                • 14oz <br />
                • Faixa personalizada Tommy <br />
                • Aviamentos de metal em ouro velho <br />
                • Bordado peito e costas
            </p>
            <div className="mb-4">
                <h6 className="font-semibold mb-2">TAMANHO</h6>
                <div className="flex space-x-2">
                    <p className="bg-black text-white py-1 px-3">XGG</p>
                    <p className="bg-black text-white py-1 px-3">P</p>
                    <p className="bg-black text-white py-1 px-3">M</p>
                    <p className="bg-black text-white py-1 px-3">G</p>
                    <p className="bg-black text-white py-1 px-3">GG</p>
                </div>
            </div>

            {/* Botão de adicionar */}
            <div className="flex items-center mb-4 space-x-4">
                <div className="flex items-center bg-slate-200 w-64">
                    <button onClick={decrementar} className="bg-slate-200 text-black w-1/4 py-3">
                        -
                    </button>
                    <span className="flex-1 text-center">{quantidade}</span>
                    <button onClick={incrementar} className="bg-slate-200 text-black w-1/4 py-3">
                        +
                    </button>
                </div>
                <button className="bg-black text-white py-3 px-4 w-64 border border-transparent hover:bg-white hover:border-black hover:text-black transition-colors duration-200">
                    Comprar
                </button>
            </div>
        </section>
    );
}
