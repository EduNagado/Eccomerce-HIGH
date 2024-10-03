import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center px-8">
      {/* Imagens alinhadas lado a lado */}
      <div className="flex w-full h-[calc(100vh-150px)]"> 
        {/* Primeira Imagem */}
        <div className="relative w-1/3">
          <Image
            src="/imgHome/1.png"
            alt="Foto 1"
            layout="fill"
            className="object-cover"
          />
        </div>

        {/* Segunda Imagem com botão sobreposto */}
        <div className="relative w-1/3 flex items-center justify-center">
          <Image
            src="/imgHome/2.png"
            alt="Foto 2"
            layout="fill"
            className="object-cover"
          />
          {/* Botão centralizado */}
          <button className="absolute bg-black text-white py-2 px-4 bg-opacity-50 hover:bg-opacity-75 uppercase">
            <Link href={"/shop"}>Compre agora</Link>
            
          </button>
        </div>

        {/* Terceira Imagem */}
        <div className="relative w-1/3">
          <Image
            src="/imgHome/3.png"
            alt="Foto 3"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>

      {/* Texto descritivo */}
      <div className="mt-8 mb-16 text-center max-w-4xl"> 
        <p className="text-sm text-gray-400 font-light mb-4">
          Fundada em Santo André - ABC Paulista, com oito anos de história e presente em quase todo o país, a CLASS é
          reconhecida no mercado, não só por oferecer peças esportivas de luxo, mas também por apresentar a cultura
          brasileira como sua verdadeira referência com peças que refletem o estilo de vida e improvisação com artigos
          sofisticados, rico em conteúdo histórico e atraente para o público jovem.
        </p>
        <p className="text-sm text-gray-400 font-light">
          Da cena do skate à presença em lojas prestigiadas, a CLASS vem acompanhando o crescimento mundial do
          mercado.
        </p>
      </div>
      
    </section>
  );
}
