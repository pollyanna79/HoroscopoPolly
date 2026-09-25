import Image from 'next/image';
import estilos from './cards.module.css';

type Props = {
  signo: string;
  nome: string;
  dia: string;
  frase: string;
};

export default function CardsSignos({ signo, nome, dia, frase }: Props) {
  return (
    <div className={estilos.cardPrincipal}>
      <div className={estilos.cardConteudo}>
        <Image src={signo} alt={nome} width={120} height={120} className={estilos.imagemCard} />
        <h2>{nome}</h2>
        <p className={estilos.dataCard}>{dia}</p>
        <p className={estilos.dataCard}>Mensagem do Dia:</p>
        <p className={estilos.fraseCard}>{frase}</p>
      </div>
    </div>
  );
}
