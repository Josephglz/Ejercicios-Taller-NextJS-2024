import Card, { CardProps } from "./components/card/Card";

export default function Home() {

  const listaTarjetas: CardProps[] = [
    {
      title: "Titulo de la tarjeta",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta dos",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta tres",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta cuatro",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta cinco",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta seis",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta siete",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta ocho",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta nueve",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta diez",
      description: "Descripción de la tarjeta",
      likes: 399
    },
    {
      title: "Titulo de la tarjeta once",
      description: "Descripción de la tarjeta",
      likes: 399
    },
  ]
  
  return (
    <div>
      <h1 className="text-red-800 text-4xl font-Anaheim">Prueba</h1>
      <div className="flex flex-grow gap-2 p-4">
        {listaTarjetas.map((tarjeta, index) => (
          <div key={index}>
            <Card 
              title={tarjeta.title}
              description={tarjeta.description}
              likes={tarjeta.likes}
            />
          </div>
        ))}
      </div>
    </div>
  );
}