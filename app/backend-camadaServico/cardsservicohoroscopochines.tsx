import CardsSignosChines from '../FrontEnd/Cards/cardshoroscopochines';
import { horoscopochines } from './horoscopochines';

type Props = {
  ano: number;
};

export default function CamadaServicoChines({ ano }: Props) {
  const anoValido = Number.isFinite(ano) && ano > 0 ? ano : new Date().getFullYear();
  const indiceAnimal = ((anoValido - 2020) % 12 + 12) % 12;
  const animalSelecionado = horoscopochines[indiceAnimal] ?? horoscopochines[0];

  return (
    <CardsSignosChines
      animal={animalSelecionado.animal}
      ano={anoValido}
      imagem={animalSelecionado.imagem}
      caracteristica={animalSelecionado.caracteristica}
      jeitoDeSer={animalSelecionado.jeitoDeSer}
      vidaAmorosa={animalSelecionado.vidaAmorosa}
      profissional={animalSelecionado.profissional}
      amigos={animalSelecionado.amigos}
    />
  );
}
