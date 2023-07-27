import quemSomos from "../../../assets/quemSomos.png";

export default function QuemSomos() {
  return (
    <article className="mt-40" id="quemSomos">
      <div className="max-w-6xl mx-auto grid grid-cols-1 px-10 md:grid-cols-2 items-center">
        <div>
          <img className="w-[80%] lg:w-[60%] mx-auto" src={quemSomos} alt="Imaguem quem somos" />
        </div>
        <div className="pt-10 md:pt-0 flex flex-col">
          <p className="text-white">Atuamos no ramo de impressões gráficas, mídias sociais, brindes personalizados e instalações. Estamos sempre oferecendo uma solução inteligente e buscamos ser cada vez mais uma empresa completa. Estamos preparados para atender clientes de pequeno, médio e grande porte, trabalhando  com dedicação, profissionalismo e responsabilidade. Entendemos que o seu crescimento e sucesso é também o nosso. Estamos prontos para atendê-los.</p>
          <br />
          <i className="text-white text-center">"Bruno e Beatriz"</i>
        </div>
      </div>
      
    </article>
  )
}