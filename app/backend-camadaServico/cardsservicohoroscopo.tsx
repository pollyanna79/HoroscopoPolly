import CardsSigno from '../FrontEnd/Cards';
import { getFraseDoDia, getSignoAtual, type Signo } from './colecao';

type Props = {
  signoSelecionado?: Signo;
};

export default function CamadaServico({ signoSelecionado }: Props) {
  const hoje = new Date();
  const signoAtivo = signoSelecionado ?? getSignoAtual(hoje);
  const fraseDoDia = getFraseDoDia(signoAtivo, hoje);

  return (
    <CardsSigno
      signo={signoAtivo.signo}
      nome={signoAtivo.nome}
      dia={signoAtivo.dia}
      frase={fraseDoDia}
    />
  );
}
