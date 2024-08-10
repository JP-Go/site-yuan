import { Showcase } from "./Showcase";
import { products } from "../../products";
import { clients } from "../../clients";

function PortfolioSection() {
  return (
    <section>
      <Showcase
        title="Nossos produtos"
        alt="Produtos da Yuan"
        variant="primary"
      >
        <div
          className="flex flex-col gap-20 px-20 mt-20 lg:grid lg:grid-cols-4 lg:gap-y-20 lg:gap-x-40 max-w-[1280px] w-full"
          id="produtos"
        >
          {products.slice(0, 4).map((imgSrc) => {
            return <img key={imgSrc} className="h-16" src={imgSrc} />;
          })}
          {products.slice(4, 6).map((imgSrc, idx) => {
            const style =
              idx === 0
                ? "lg:place-self-end place-self-center w-80"
                : "place-content-start h-28";
            return (
              <img
                key={imgSrc}
                className={`col-span-2 ${style}`}
                src={imgSrc}
              />
            );
          })}
        </div>
      </Showcase>
      <Showcase
        title="Nossos clientes"
        alt="Clientes da Yuan"
        variant="secondary"
        id="clientes"
      >
        <div className="flex flex-col gap-12 px-20 mt-20 lg:flex-row lg:gap-28 lg:items-stretch">
          {clients.slice(0, 4).map((imgSrc) => {
            return <img key={imgSrc} className="h-20 max-w-20" src={imgSrc} />;
          })}
        </div>
        <div className="flex flex-col gap-12 px-20 mt-20 lg:flex-row lg:gap-28 lg:items-stretch">
          {clients.slice(4, 7).map((imgSrc) => {
            return <img key={imgSrc} className="h-24" src={imgSrc} />;
          })}
        </div>
      </Showcase>
    </section>
  );
}

export default PortfolioSection;
