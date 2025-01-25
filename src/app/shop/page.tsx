"use client";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    category: ["T-SHIRTS", "ALL"],
    name: "Tee Paris Black",
    href: "#",
    imageSrc: "/imgPodutos/camisa1.png",
    imageAlt: "Front of men's Tee Paris Black.",
    price: "R$199",
  },
  {
    id: 2,
    category: ["T-SHIRTS", "ALL"],
    name: "Tee Paris White",
    href: "#",
    imageSrc: "/imgPodutos/camisa2.png",
    imageAlt: "Front of men's Tee Paris White.",
    price: "R$199",
  },
  {
    id: 3,
    category: ["NEW", "ALL", "JACKETS"],
    name: "TJ x HIGH Denim Jacket",
    href: "#",
    imageSrc: "/imgPodutos/Blusa1.png",
    imageAlt: "Front of TJ x HIGH Denim Jacket.",
    price: "R$699",
  },
  {
    id: 4,
    category: ["NEW", "ALL", "JACKETS"],
    name: "TJ x HIGH Nylon Jacket",
    href: "#",
    imageSrc: "/imgPodutos/blusa2.png",
    imageAlt: "Front of TJ x HIGH Nylon Jacket.",
    price: "R$849",
  },
  {
    id: 5,
    category: ["ALL", "SWEATSHIRTS"],
    name: "Hoodie Logo Line Night Black",
    href: "#",
    imageSrc: "/imgPodutos/moletom1.png",
    imageAlt: "Front of Hoodie Logo Line Night Black.",
    price: "R$439",
  },
  {
    id: 6,
    category: ["ALL", "SWEATSHIRTS"],
    name: "Hoodie Logo Line Night Brown",
    href: "#",
    imageSrc: "/imgPodutos/moletom2.png",
    imageAlt: "Front of Hoodie Logo Line Night Brown.",
    price: "R$439",
  },
  {
    id: 7,
    category: ["NEW", "ALL", "PANTS"],
    name: "Jeans Pants Planet Black",
    href: "#",
    imageSrc: "/imgPodutos/calca1.png",
    imageAlt: "Front of Jeans Pants Planet Black.",
    price: "R$599",
  },
  {
    id: 8,
    category: ["NEW", "ALL", "PANTS"],
    name: "Jeans Pants Planet Blue",
    href: "#",
    imageSrc: "/imgPodutos/calca2.png",
    imageAlt: "Front of Jeans Pants Planet Blue.",
    price: "R$599",
  },
  {
    id: 9,
    category: ["ALL", "PANTS"],
    name: "Smokey Pants Grey",
    href: "#",
    imageSrc: "/imgPodutos/calca3.png",
    imageAlt: "Front of Smokey Pants Grey.",
    price: "R$489",
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Filtra os produtos com base na categoria selecionada
  const filteredProducts = products.filter((product) =>
    product.category.includes(selectedCategory)
  );

  return (
    <section className="flex flex-col items-center justify-between p-4 mt-6">
      {/* Navegação */}
      <nav className="w-full">
        <ul className="flex justify-between items-center space-x-7">
          {[
            "NEW",
            "ALL",
            "H-LINE",
            "JACKETS",
            "LONGSLEEVES",
            "PANTS",
            "SHIRTS",
            "SHORTS",
            "SWEATSHIRTS",
            "T-SHIRTS",
            "ACCESSORIES",
            "BAGS",
            "HATS",
            "SALE",
          ].map((category) => (
            <li
              key={category}
              className={`cursor-pointer ${
                selectedCategory === category ? "font-bold" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>

      {/* Produtos */}
      <div className="bg-white mt-6">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                {filteredProducts.map((product) => (
                <Link key={product.id} href={`/produto/${product.id}`}>
                    <div className="group relative">
                    {/* Container da imagem */}
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-96">
                        <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>

                    {/* Informações sobre o produto */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-slate-50 bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <div className="p-4 text-center">
                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm font-semibold text-gray-700">{product.price}</p>
                        </div>
                    </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
