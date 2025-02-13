"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const idproduto = [
  {
    id: 1,
    name: "Tee Paris Black",
    href: "#",
    imageSrc: [
      "/imgPodutos/camisa1.png",
      "/imgPodutos/camisa1a.png",
      "/imgPodutos/camisa1b.png",
      "/imgPodutos/camisa1c.png",
      "/imgPodutos/medidaCamisa.png",
    ],
    description: "Descrição do produto Tee Paris Black.",
    price: "R$199",
    sizes: ["XGG", "P", "M", "G", "GG"],
  },
  {
    id: 2,
    name: "Tee Paris White",
    href: "#",
    imageSrc: [
      "/imgPodutos/camisa2.png",
      "/imgPodutos/camisa2a.png",
      "/imgPodutos/camisa2b.png",
      "/imgPodutos/camisa2c.png",
      "/imgPodutos/medidaCamisa.png",
    ],
    description: "Descrição do produto Tee Paris White.",
    price: "R$199",
    sizes: ["XGG", "P", "M", "G", "GG"],
  },
  {
    id: 3,
    name: "TJ x HIGH Denim Jacket",
    href: "#",
    imageSrc: [
      "/imgPodutos/Blusa1.png",
      "/imgPodutos/blusa1a.png",
      "/imgPodutos/blusa1b.png",
      "/imgPodutos/blusa1c.png",
      "/imgPodutos/medidaBlusa.png",
    ],
    description: "Descrição do produto TJ x HIGH Denim Jacket.",
    price: "R$699",
    sizes: ["M", "G", "GG"],
  },
];

export default function Produto() {
  const [quantidade, setQuantidade] = useState(1);
  const [imagemSelecionada, setImagemSelecionada] = useState("");
  
  // Obtain route parameters
  const params = useParams();
  const { id } = params;
  
  // Convert id to a number
  const numericId = id ? parseInt(id, 10) : NaN;
  
  if (isNaN(numericId)) {
    return <div>ID inválido</div>;
  }
  
  const produtoSelecionado = idproduto.find(
    (produto) => produto.id === numericId
  );
  
  if (!produtoSelecionado) {
    return <div>Produto não encontrado</div>;
  }
  
  // Set initial image on product load
  useEffect(() => {
    if (produtoSelecionado?.imageSrc.length > 0) {
      setImagemSelecionada(produtoSelecionado.imageSrc[0]);
    }
  }, [produtoSelecionado]);
  
  const incrementar = () => setQuantidade((q) => q + 1);
  const decrementar = () => setQuantidade((q) => (q > 1 ? q - 1 : q));

  return (
    <section className="flex p-6 bg-white">
      {/* Column for images */}
      <div className="w-1/2 flex flex-col items-start ">
        <img
          src={imagemSelecionada}
          alt="Imagem selecionada"
          className="w-full h-80 object-contain mb-4"
        />
        <div className="flex flex-col space-y-2 absolute">
          {produtoSelecionado.imageSrc.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className="w-16 h-16 cursor-pointer rounded border border-gray-300 object-cover "
              onClick={() => setImagemSelecionada(image)}
            />
          ))}
        </div>
      </div>

      {/* Column for product details */}
      <div className="w-1/2 flex flex-col justify-start items-start p-6">
        <h1 className="text-3xl font-bold mb-2">{produtoSelecionado.name}</h1>
        <p className="mb-2">{produtoSelecionado.description}</p>
        <p className="text-xl font-bold mb-4">{produtoSelecionado.price}</p>
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
            {produtoSelecionado.sizes.map((size) => (
              <p key={size} className="bg-black text-white py-1 px-3">
                {size}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center mb-4 space-x-4">
          <div className="flex items-center bg-slate-200 w-64">
            <button
              onClick={decrementar}
              className="bg-slate-200 text-black w-1/4 py-3"
            >
              -
            </button>
            <span className="flex-1 text-center">{quantidade}</span>
            <button
              onClick={incrementar}
              className="bg-slate-200 text-black w-1/4 py-3"
            >
              +
            </button>
          </div>
          <button className="bg-black text-white py-3 px-4 w-64 border border-transparent hover:bg-white hover:border-black hover:text-black transition-colors duration-200">
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}