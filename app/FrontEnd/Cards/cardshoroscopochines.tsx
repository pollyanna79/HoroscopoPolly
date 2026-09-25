import Image from 'next/image';
import estilos from './cards.module.css';

type Props = {
  animal: string;
  ano: number;
  imagem: string;
  caracteristica: string;
  jeitoDeSer: string;
  vidaAmorosa: string;
  profissional: string;
  amigos: string;
};

export default function CardsSignosChines({
  animal,
  ano,
  imagem,
  caracteristica,
  jeitoDeSer,
  vidaAmorosa,
  profissional,
  amigos,
}: Props) {
  return (
    <div className={estilos.cardPrincipal}>
      <div className={estilos.cardConteudo}>
        <Image src={imagem} alt={animal} width={120} height={120} className={estilos.imagemCard} />
        <h2>{animal}</h2>
        <p className={estilos.dataCard}>Ano {ano}</p>
        <p className={estilos.fraseCard}><strong>Característica:</strong> {caracteristica}</p>
        <p className={estilos.fraseCard}><strong>Jeito de ser:</strong> {jeitoDeSer}</p>
        <p className={estilos.fraseCard}><strong>Amor:</strong> {vidaAmorosa}</p>
        <p className={estilos.fraseCard}><strong>Profissional:</strong> {profissional}</p>
        <p className={estilos.fraseCard}><strong>Amigos:</strong> {amigos}</p>
      </div>
    </div>
  );
}
